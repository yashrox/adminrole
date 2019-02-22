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
    

    
    //group B

    newdataB = new EventEmitter<any[]>()
    
    
    private dataB : any[] = [            ] ;
    
    getsdataB(){
        return this.dataB ;
    }
    
    newvalueB(val){
        this.dataB.push(val);
        this.newdataB.emit(this.dataB.slice());
    
        
    }
    
    setsdataB(value){
        this.dataB = value;
        this.newdataB.emit(this.dataB.slice());
    }
    
        ongetdataB(){
                let tokken = this.reqser.getTokken();
                
                return  this.http.get('https://admintask-d041e.firebaseio.com/groupB.json?auth=' +tokken )
                .subscribe( (response) => { this.setsdataB(response) ;
                
                                            console.log(response) ;    
                } )
        
            
        }   
        
        onputdataB(){
              let tokken = this.reqser.getTokken()
            return this.http.put('https://admintask-d041e.firebaseio.com/groupB.json?auth=' +tokken  , 
            this.getsdataB())
        } 
    
    
    //groupC
    
    newdataC = new EventEmitter<any[]>()
    
    
    private dataC : any[] = [            ] ;
    
    getsdataC(){
        return this.dataC ;
    }
    
    newvalueC(val){
        this.dataC.push(val);
        this.newdataC.emit(this.dataC.slice());
    
        
    }
    
    setsdataC(value){
        this.dataC = value;
        this.newdataC.emit(this.dataC.slice());
    }
    
        ongetdataC(){
                let tokken = this.reqser.getTokken();
                
                return  this.http.get('https://admintask-d041e.firebaseio.com/groupC.json?auth=' +tokken )
                .subscribe( (response) => { this.setsdataC(response) ;
                
                                            console.log(response) ;    
                } )
        
            
        }   
        
        onputdataC(){
              let tokken = this.reqser.getTokken()
            return this.http.put('https://admintask-d041e.firebaseio.com/groupC.json?auth=' +tokken  , 
            this.getsdataC())
        } 
    
    
    //groupD
    
    newdataD = new EventEmitter<any[]>()
    
    
    private dataD : any[] = [            ] ;
    
    getsdataD(){
        return this.dataD ;
    }
    
    newvalueD(val){
        this.dataD.push(val);
        this.newdataD.emit(this.dataD.slice());
    
        
    }
    
    setsdataD(value){
        this.dataD = value;
        this.newdataD.emit(this.dataD.slice());
    }
    
        ongetdataD(){
                let tokken = this.reqser.getTokken();
                
                return  this.http.get('https://admintask-d041e.firebaseio.com/groupD.json?auth=' +tokken )
                .subscribe( (response) => { this.setsdataD(response) ;
                
                                            console.log(response) ;    
                } )
        
            
        }   
        
        onputdataD(){
              let tokken = this.reqser.getTokken()
            return this.http.put('https://admintask-d041e.firebaseio.com/groupD.json?auth=' +tokken  , 
            this.getsdataD())
        } 
    
    
}