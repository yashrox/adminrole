import { Component, OnInit } from '@angular/core';
import { formdata } from '../services/formdata.service'
import {DETAILS} from '../services/user.model'
import {Request} from '../services/formrequest.services'
import {ActivatedRoute , Params , Router} from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userser :  formdata , private reqser  : Request  , 
  private route : ActivatedRoute , private router : Router) { }
  
  userdata : DETAILS[]
  ids : number ;
  name  : string ;

  ngOnInit() {
  
        this.userdata = this.userser.getdetail() ;
        this.userser.newuser.subscribe( (value) => { this.userdata = value    } )
        
        // this.route.params.subscribe( (param : Params) => {
            
        //     this.ids = +param['id'] ;
        //     this.userser.Onedetails(this.ids);
                    
        //   } )
  
        
  }

    
  getdata(){
    this.reqser.ongetdata() ;
  }


    admin(i : number){
      this.router.navigate(['/admin',i]);
    }
  
}
