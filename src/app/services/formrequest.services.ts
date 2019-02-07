import { HttpClient  , HttpParams } from '@angular/common/http' ;
import {Injectable} from '@angular/core' ; 
import {DETAILS} from './user.model' ;
import {formdata} from './formdata.service' ;
import * as firebase  from 'firebase' ;

@Injectable()
export class Request {
    constructor(private httpclient : HttpClient  , private userser  : formdata ){}
    
    tokken : string 
    
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
        
        let newtok = this.getTokken()
        return this.httpclient.put('https://admintask-d041e.firebaseio.com/formuser.json?auth=' + newtok , 
        this.userser.getdetail() )
    
        console.log(this.userser.getdetail())
        
    }
    

    //firebase authentication 
        
        onregister(username : string , password : string){
                
                firebase.auth().createUserWithEmailAndPassword(username , password)
                .then( (response) => console.log(response) )
                .catch( (err) => console.log(err.message) )
            
        }
        
        onlogin(username : string , password : string){
            firebase.auth().signInWithEmailAndPassword(username , password)
                .then( (response) => {
                            
                            firebase.auth().currentUser.getIdToken()
                            .then((tok) => { this.tokken = tok })
                            .catch((err) => console.log(err.message))
                 })
                .catch( (err) => console.log(err.message) )
            
                alert("TOKEN IS AVAILABLE")
        }
    
    getTokken(){
                    firebase.auth().currentUser.getIdToken()
                    .then( (tok) => { this.tokken = tok } )
                    .catch((err) => console.log(err.message) )
            return this.tokken ;    
    }
    
    
    isAuthenticated(){
      return this.tokken != null ;
    }
    
    
    logout(){
                firebase.auth().signOut();
                this.tokken = null ;
    }

    
}