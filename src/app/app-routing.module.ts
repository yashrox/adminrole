import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserformComponent } from './userform/userform.component'
import {LoginComponent} from './auth/login/login.component'
import {RegisterComponent} from './auth/register/register.component' 
import {AdminComponent} from './admin/admin.component'
import {HomeComponent} from './home/home.component'
import {AdmindetailsComponent} from './admin/admindetails/admindetails.component'
import {GroupComponent} from './group/group.component'
import {authactivate} from './shared/canactivate' ;
import {admincheck} from './shared/canact.admin';
import {GroupAComponent} from './group/group-a/group-a.component'
import {GroupBComponent} from './group/group-b/group-b.component'
import {GroupCComponent} from './group/group-c/group-c.component'
import {GroupDComponent} from './group/group-d/group-d.component'

const routes: Routes = [
    {path : "home" , component : HomeComponent},
    { path : "forms" , component : UserformComponent } ,
    {path : "admin" , component : AdminComponent , canActivate : [authactivate] } ,
    {path : "admin/GROUP" , component : GroupComponent , canActivate : [authactivate] , 
      children : [ { path : "groupA"   , component : GroupAComponent} ,
                    { path : "groupB"   , component : GroupBComponent},
                    { path : "groupC"   , component : GroupCComponent},
                    { path : "groupD"   , component : GroupDComponent},
      ]
      
    },
    {path : "admin/:id" , component: AdmindetailsComponent , canActivate : [admincheck] } ,
    
    {path : "login" , component : LoginComponent} ,
    {path : "register" , component : RegisterComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
