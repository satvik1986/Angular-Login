import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from './home/home.component';
import { UserService } from "../shared/user.service";
import { HttpClientModule } from "@angular/common/http";

const appRoutes:Routes=[
  {path : 'adduser',component:RegisterComponent},
  {path : 'login',component:LoginComponent},
  {path : 'home',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
