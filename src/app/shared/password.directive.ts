import {Input , Directive} from '@angular/core'
import {Validator , NG_VALIDATORS , FormControl} from '@angular/forms'

@Directive ({
    selector : "[adminValidation]" ,
     providers: [{provide: NG_VALIDATORS, useExisting: adminvalidate, multi: true}]
})

export class adminvalidate implements Validator {
    
    @Input ('adminValidation') passvalue  : string
    
    validate(control : FormControl) : {[key :  string] : any } | null {
            
    //patternValidators = "[^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$]"   
        
        console.log(this.passvalue)
        if(control.value === "admintask123@gmail.com"){
            return { 'nameIsForbidden'  : true}
        }
        
        return null ;
            
    }
    
}