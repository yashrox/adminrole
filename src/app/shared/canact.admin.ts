import {CanActivate , ActivatedRouteSnapshot  , RouterStateSnapshot} from '@angular/router'
import {Request} from '../services/formrequest.services'
import {Injectable} from '@angular/core'

@Injectable()

export class admincheck implements CanActivate {
        
        constructor(private reqser : Request){}
        
        canActivate(route : ActivatedRouteSnapshot  , state : RouterStateSnapshot) : boolean {
           console.log(this.reqser.adminuser);
           
            if(this.reqser.adminuser === 'admintask123@gmail.com' ){
                return true ;
            }
        
            alert("YOU ARE NOT ALLOWED HERE");
            return false ;
            
        }
}