import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms'
import {formdata} from '../services/formdata.service'
import {Request} from '../services/formrequest.services'
import {Router} from '@angular/router'

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  constructor( private userser : formdata  , private requests  : Request , private router  : Router) { }

  signup  : FormGroup ;
  
  ngOnInit() {
                this.signup = new FormGroup( {
                    
                      'name' : new FormControl(null , Validators.required),
                      'email' : new FormControl(null , [Validators.required, Validators.email]),
                      'address' : new FormControl(null , Validators.required),
                      'gender'  : new FormControl(null , Validators.required),
                      'user'  : new FormControl(null , Validators.required),
                  
                }  )  
                    
    
    
  }

onclick(){
  
  
    let username = this.signup.value.name ;
    let email = this.signup.value.email ;
    let address = this.signup.value.address ;
    let gender = this.signup.value.gender ;
    let user  = this.signup.value.user ;
    
    this.userser.newdetail(username , email , address  , gender , user ) ;
    
  
    this.requests.onputdata().subscribe( (response) => { console.log(response) } )
  
    this.router.navigate(['/home'])
  
}
  
  
  
}