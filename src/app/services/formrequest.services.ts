import { HttpClient  , HttpParams } from '@angular/common/http' ;
import {Injectable , EventEmitter} from '@angular/core' ; 
import {DETAILS} from './user.model' ;
import {formdata} from './formdata.service' ;
import * as firebase  from 'firebase' ;
//import {Subject} from 'rxjs/Subject' ;
import {Router } from '@angular/router' ;

@Injectable()
export class Request {
    constructor(private httpclient : HttpClient  , private userser  : formdata  , 
    private router : Router){}
    
    result : string ;
    tokken : string ;
    resultreg : string ;    
    
    
    ongetdata(){
                
            let newtok = this.getTokken()
          //  let Params = new HttpParams('auth', newtok)
        return this.httpclient.get('https://admintask-d041e.firebaseio.com/formuser.json?auth=' + newtok )
        
        .subscribe( (newdata) => {
            console.log(newdata);
            this.userser.setvalue(newdata)
        } )
    }
        
    onputdata(){
            
                console.log("put request");
        
        let newtok = this.getTokken()
        return this.httpclient.put('https://admintask-d041e.firebaseio.com/formuser.json?auth=' + newtok , 
        this.userser.getdetail() )
    
        console.log(this.userser.getdetail())
        
    }
    
    

    //firebase authentication 
        
        onregister(username : string , password : string){
                
                firebase.auth().createUserWithEmailAndPassword(username , password)
                .then( (response) => {
                    this.resultreg = " " ;
                    console.log(response) })
                .catch( (err) => {
                    console.log(err.message)
                    this.resultreg = err.message
                    this.router.navigate(['/register'])
                } )
            
        
        
        }
        
        
    adminuser : string   
        
        onlogin(username : string , password : string){
            this.adminuser = username ;
            
            firebase.auth().signInWithEmailAndPassword(username , password)
                .then( (response) => {
                            
                            firebase.auth().currentUser.getIdToken()
                            .then((tok) => { this.tokken = tok 
                               alert("TOKKEN GENERATED")
                                this.result = " " ;
                            })
                            .catch((err) => console.log(err.message) )
                                
                            })
                            .catch( (err) => {
                                console.log(err.message)
                                this.result = err.message  
                              
                                this.router.navigate(['/login'])
                            } )
        
                 }
                
            
                
        
    
    getTokken(){
                    firebase.auth().currentUser.getIdToken()
                    .then( (tok) => { this.tokken = tok ;
                        
                    } )
                    .catch((err) => console.log(err.message) )
            return this.tokken ;    
    }
    
    
    isAuthenticated(){
      return this.tokken != null ;
    }
   
   
   checkuser(){
   
   if(!this.tokken){
       alert("PLEASE LOGIN FIRST");
       this.router.navigate(['/login']);
   }
       
   
       return this.tokken != null 
   }
    
    
    logout(){
                firebase.auth().signOut();
                this.tokken = null ;
    }

   

    

    
    
    
    
    
    
    
    
    
}