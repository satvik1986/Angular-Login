import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup,FormControl,Validators } from "@angular/forms";
import { UserService } from "../../shared/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private _router:Router) { }

  ngOnInit() {
  }

  loginForm:FormGroup=new FormGroup({
    UserName:new FormControl(null,Validators.required),
    Password:new FormControl(null,Validators.required)
  })

  login(){
    if(!this.loginForm.valid){
      alert("Validation is not done properly. Please fill the all mandatory field");
      console.log('Invalid');
      return;
    }else{
      this.userService.login(JSON.stringify(this.loginForm.value))
      .subscribe(data=>{
        console.log(data);
        if(data.success===false){
          alert(data.message);
          return;
        }
        this._router.navigate(['/home'])
      },
      error=>console.log(error)
      )
    }
  }
}
