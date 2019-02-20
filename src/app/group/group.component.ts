import { Component, OnInit } from '@angular/core';
import {groups} from '../services/group.services' ;

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(private grps : groups) { }
  
  groupA : any[] 
  
  ngOnInit() {
            this.groupA = this.grps.getsdataA() ;
            this.grps.newdataA.subscribe( (value) => {  this.groupA = value } );
              
  }

    


}
