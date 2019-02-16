import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule , FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformComponent } from './userform/userform.component';
import { NavsComponent } from './navs/navs.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/admin.component';
import {formdata } from './services/formdata.service' ;
import {Request} from './services/formrequest.services';
import { HomeComponent } from './home/home.component' ;
import { adminvalidate } from './shared/password.directive';
import {passValidate} from './shared/pass.directive' ;
import { AdmindetailsComponent } from './admin/admindetails/admindetails.component' ;

@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    NavsComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    AdmindetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [formdata , Request , adminvalidate , passValidate],
  bootstrap: [AppComponent]

})

export class AppModule { }
