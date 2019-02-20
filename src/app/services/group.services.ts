import {Injectable , EventEmitter} from '@angular/core'
import * as firebase from 'firebase'
import {HttpClient} from '@angular/common/http'
import {Request} from './formrequest.services'

@Injectable()

export class groups {
    
    newdataA = new EventEmitter<any[]>()
    
    constructor( private http : HttpClient  , private reqser : Request){}
    
    //group A
    
    private dataA : any[] = [            ] ;
    
    getsdataA(){
        return this.dataA ;
    }
    
    newvalueA(val){
        this.dataA.push(val);
        this.newdataA.emit(this.dataA.slice());
    
        
    }
    
    setsdataA(value){
        this.dataA = value;
        this.newdataA.emit(this.dataA.slice());
    }
    
        ongetdataA(){
                let tokken = this.reqser.getTokken();
                
                return  this.http.get('https://admintask-d041e.firebaseio.com/groupA.json?auth=' +tokken )
                .subscribe( (response) => { this.setsdataA(response) ;
                
                                            console.log(response) ;    
                } )
        
            
        }   
        
        onputdataA(){
              let tokken = this.reqser.getTokken()
            return this.http.put('https://admintask-d041e.firebaseio.com/groupA.json?auth=' +tokken  , 
            this.getsdataA())
        }
    

    
    
}