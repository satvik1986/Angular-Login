import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup,FormControl,Validators } from "@angular/forms";
import { UserService } from "../../shared/user.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup= new FormGroup({
      EmailId:new FormControl(null,[Validators.email,Validators.required]),
      FirstName:new FormControl(null,Validators.required),
      LastName:new FormControl(null,Validators.required),
      Password:new FormControl(null,Validators.required),
      Contact:new FormControl(null,Validators.required),
      Address:new  FormControl(null,Validators.required),
      UserName:new FormControl(null,Validators.required)
  })

  constructor(private userService:UserService,private _router:Router) { }

  ngOnInit() {
  }

  register(){
   
    if(!this.registerForm.valid){
      alert("Validation is not done properly. Please fill the all mandatory field");
      console.log(this.registerForm.value);
      return;
    }else{
        this.userService.register(JSON.stringify(this.registerForm.value))
        .subscribe(data=>{
          console.log(data);
          if(data._id!=null || data._id!=undefined){
            alert('Your user resitration has been done successfully with username '+data.UserName);
            this._router.navigate(['/home']);
          }else{
            alert('Your user registration failed. Please try agian later.');
            return;
          }
        },
        error=>console.log(error)
      )
    }
  }
}
