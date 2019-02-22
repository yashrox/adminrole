import { Component, OnInit , ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms' ;
import {Request } from '../../services/formrequest.services' ;
import {Router}  from '@angular/router'
import {groups} from '../../services/group.services'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

@ViewChild('f') signup : NgForm

  constructor(private reqser : Request ,  private route : Router , private grps : groups) { }
    
    errval : string
    adminuser : string
    
  ngOnInit() {
    
    this.errval = this.reqser.result
        console.log("err value" + this.errval); 
    
  }

   onclick(f : NgForm) {
      let username = f.value.username ;
      this.adminuser = f.value.username;
    
      let password =  f.value.password ;
    
    
    this.reqser.onlogin(username , password);
     
     
     setTimeout(() => {
       this.reqser.ongetdata() ;
         this.grps.ongetdataA() ;  
         this.grps.ongetdataB();
         this.grps.ongetdataC();
         this.grps.ongetdataD();
     } , 1200);
          
    
     
      this.route.navigate(['/forms']) ;    
  
     console.log(this.signup);
  
    
       
   }  


    //password validation
    
    
        
    
    
}
