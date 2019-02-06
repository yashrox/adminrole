import { Component, OnInit , ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'
import {Request } from '../../services/formrequest.services'
import {Router}  from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private reqser : Request  , private route : Router) { }

  @ViewChild('f') signup : NgForm 
  

  ngOnInit() {
  }

  onclick(f : NgForm) {
      let username = f.value.username ;
      let password =  f.value.password ;
    
    this.reqser.onregister(username , password);
          
    this.route.navigate(['/forms']) ;
    
  }
  
  
}
