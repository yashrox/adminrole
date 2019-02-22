import {Pipe , PipeTransform} from '@angular/core'

@Pipe({
    name : 'search'
})

export class search implements PipeTransform {
            
            transform(val : any[] , formval : string) {
                
                if(!formval || !val){
                    return val
                }
                
                console.log(val , formval);
               return val.filter(val => 
                val.name.toLowerCase().indexOf(formval.toLowerCase()) != -1) 
                
                
                
                
            }
    
}    
    





