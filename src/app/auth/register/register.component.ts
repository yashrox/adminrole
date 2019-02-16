import { Component, OnInit , DoCheck ,ViewChild , OnChanges } from '@angular/core';
import {NgForm , NgModel , Validator} from '@angular/forms'
import {Request } from '../../services/formrequest.services'
import {Router}  from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit   {

  constructor( private reqser : Request  , private route : Router) { }

  pattr = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}" ;
  @ViewChild('f') signup : NgForm 
  @ViewChild('e') email : NgModel
  errvalue : string ;
  upper : boolean = false ; 
  lower : boolean  = false;
  num : boolean  = false;
  special : boolean = false ;
  pass : string  = null;
  
  ngOnInit() {
      this.errvalue  = this.reqser.resultreg ;


              

  }


// change(){
  
//   console.log("1");
//         let hasNumber = /\d/.test(this.pass);
//         let hasUpper = /[A-Z]/.test(this.pass);
//         let hasLower = /[a-z]/.test(this.pass);      
//         let chars =  /[A-Za-z\d$@$!%*?&]/.test(this.pass)
    
//         if(hasNumber){
//           this.num  = true
//         }else if(hasUpper){
//           this.upper = true
//         }else if(hasLower){
//           this.lower = true          
//         }else if(chars){
//           this.special = true
//         }else if(hasNumber && hasUpper && hasLower && chars){
//           this.num = true ;
//           this.upper = true;
//           this.lower = true ;
//           this.special = true ;
//         }
    
//     console.log(this.num)
//     console.log(this.upper)
//     console.log(this.lower)
//     console.log(this.special)
      
  
// }

  onclick(f : NgForm) {
      let username = f.value.username ;
      let password =  f.value.password ;
    
    this.reqser.onregister(username , password);
          
    this.route.navigate(['/forms']) ;
      
    console.log(this.signup);  
    console.log(this.email);
    
  }
  
  
}
