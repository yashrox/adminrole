import { Component, OnInit , ViewChild } from '@angular/core';
import {Router , ActivatedRoute , Params} from '@angular/router' ;
import {DETAILS} from '../../services/user.model' ;
import {formdata} from '../../services/formdata.service' ;
import {NgForm} from '@angular/forms' ;
import {Request} from '../../services/formrequest.services' ;
import {groups} from '../../services/group.services'

@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.css']
})
export class AdmindetailsComponent implements OnInit {

  constructor(private router  : Router  , private route  : ActivatedRoute , 
  private formser : formdata , private reqser : Request , private grp : groups) { }
  
  ids : number ;
  det : DETAILS ;
  total : number ;
  @ViewChild('f') signdet : NgForm ;
  details : DETAILS[]
  
  ngOnInit() {
      
      
      this.route.params.subscribe( (param : Params) => {
            
            this.ids = +param['id'] ;  
           this.det =  this.formser.Onedetails(this.ids);        
          this.details = this.formser.getdetail() ;
          console.log(this.details);  
      } )
        
      this.total =  this.formser.getlength()
      
     
    
}
  

  
    onindex() {
      
      this.ids++ ;
           
           
      this.router.navigate(['/admin' , this.ids])
              
            
              
    }
  
    
    offindex(){
      
        this.ids-- ;
      this.router.navigate(['/admin' , this.ids])
    }
  

    onassign(){
        
      
      if(this.signdet.value.group && this.signdet.value.assign){
        this.details[this.ids].mark = true ; 
          this.details[this.ids].url = ['/admin' , 'GROUP'] ;  
        console.log(this.details);
        this.formser.setvalue(this.details) ;  
       
         this.reqser.onputdata().subscribe( (response) => { console.log(response) } ) ;   
      }
      
     
         
    if(this.signdet.value.group === "groupA"){
        this.grp.newvalueA(this.signdet.value) ;
        this.grp.onputdataA().subscribe((response) => console.log(response));
      
    }else if(this.signdet.value.group === "groupB") {
          
          this.grp.newvalueB(this.signdet.value) ;
        this.grp.onputdataB().subscribe((response) => console.log(response));
          
      
    }else if(this.signdet.value.group === "groupC"){
              
              this.grp.newvalueC(this.signdet.value) ;
        this.grp.onputdataC().subscribe((response) => console.log(response));
          
    }else{
          
              this.grp.newvalueD(this.signdet.value) ;
        this.grp.onputdataD().subscribe((response) => console.log(response));
          
    }
      
      
      
     
      
      console.log(this.signdet);
      console.log(this.signdet.value);
      
    }
  

  onget(){
              this.grp.ongetdataA() ;
              
              // setTimeout(() => {
              //   this.router.navigate(['/admin' , 'GROUP'])
              // }  , 400)
              
  }
  
  
}
