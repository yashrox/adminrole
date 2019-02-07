import { Component, OnInit } from '@angular/core';
import { formdata } from '../services/formdata.service'
import {DETAILS} from '../services/user.model'
import {Request} from '../services/formrequest.services'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userser :  formdata , private reqser  : Request) { }
  
  userdata : DETAILS[]

  ngOnInit() {
  
        this.userdata = this.userser.getdetail() ;
        this.userser.newuser.subscribe( (value) => { this.userdata = value    } )
    
  }

    
  getdata(){
    this.reqser.ongetdata() ;
  }

  
}
