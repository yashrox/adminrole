import { Component, OnInit } from '@angular/core';
import {groups} from '../services/group.services' ;
import {ActivatedRoute , Params } from '@angular/router' ;

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(private grps : groups , private route : ActivatedRoute) { }
  
  groupA : any[] 
  querycheck : number
    
  ngOnInit() {
            this.groupA = this.grps.getsdataA() ;
            this.grps.newdataA.subscribe( (value) => {  this.groupA = value } );
            this.querycheck = +this.route.snapshot.queryParams ;
            this.route.queryParams.subscribe( (param : Params) => this.querycheck = +param['allow'] );
            console.log(this.querycheck);
  }

    


}
