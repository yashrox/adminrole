import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserformComponent } from './userform/userform.component'
import {LoginComponent} from './auth/login/login.component'
import {RegisterComponent} from './auth/register/register.component' 
import {AdminComponent} from './admin/admin.component'
import {HomeComponent} from './home/home.component'
import {AdmindetailsComponent} from './admin/admindetails/admindetails.component'

const routes: Routes = [
    {path : "home" , component : HomeComponent},
    { path : "forms" , component : UserformComponent } ,
    {path : "admin" , component : AdminComponent ,
    children : [
      {path : ":id" , component: AdmindetailsComponent}
      ]},
    {path : "login" , component : LoginComponent} ,
    {path : "register" , component : RegisterComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
