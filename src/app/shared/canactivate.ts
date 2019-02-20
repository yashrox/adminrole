import {CanActivate , ActivatedRouteSnapshot  , RouterStateSnapshot} from '@angular/router' 
import {Request} from '../services/formrequest.services'
import {Injectable} from '@angular/core'

@Injectable()
export class authactivate implements CanActivate  {
        
        constructor(private reqser : Request){}
        
         canActivate(route : ActivatedRouteSnapshot  , state : RouterStateSnapshot) : boolean {
             
            return this.reqser.checkuser() ;
         }   
            
    
}