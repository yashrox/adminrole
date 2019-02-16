import {Validator , FormControl , NG_VALIDATORS , AbstractControl} from '@angular/forms' ;
import {Directive , Input} from '@angular/core' ;

@Directive({
    selector : '[passpattern]' , 
    providers: [{provide: NG_VALIDATORS, 
                useExisting: passValidate, 
                multi: true}]
})

export class passValidate implements Validator  {
        
        @Input('passpattern') passvalue : string
        
        validate(control : AbstractControl) : {[key : string] : any } {
            
          let  hasno = /\d/.test(control.value);
            let    hasupper = /[A-Z]/.test(control.value);
        let    haslower = /[a-z]/.test(control.value);
            
            if(hasno || hasupper || haslower){
                return { 'one included' : true }
            }else if( hasno && hasupper && haslower ){
                return { 'all included' : true }
            }else{
                return null ;
            }
            
        }    
        
}