import {OnInit , Injectable , EventEmitter}  from '@angular/core'
import { DETAILS } from './user.model'



@Injectable()
export class formdata implements OnInit{
    
    
    
    ngOnInit(){
            
    }
    
       newuser = new EventEmitter<DETAILS[]>() ;
       newdet = new EventEmitter<DETAILS>() ;    
        
        private details : DETAILS[] = [ 
                                                  
            ] 
        
        
        getdetail(){
            return this.details ;
        }
        
        getlength(){
            return this.details.length ;
        }
    
        newdetail(username : string , email : string , address : string , gender : string , user : string ){
                            
                            
                            
                this.details.push( new DETAILS(username , email , address ,  gender , user) );    
                this.newuser.emit(this.details.slice());    
        
            
        }

        setvalue(value){
            
            this.details  = value ;
            console.log(value);
          this.newuser.emit(this.details.slice());
            
           alert("value has come");
                
        }


        Onedetails(id : number){
                
         return this.details[id] ;
         
            
        }

    
    
}
        
        