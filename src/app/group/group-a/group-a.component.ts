import { Component, OnInit } from '@angular/core';
import { groups } from '../../services/group.services'

@Component({
  selector: 'app-group-a',
  templateUrl: './group-a.component.html',
  styleUrls: ['./group-a.component.css']
})
export class GroupAComponent implements OnInit {

  constructor(private grps : groups) { }
  
    dataA : any[]  
  
  ngOnInit() {
                  
                  this.dataA = this.grps.getsdataA();
                   this.grps.newdataA.subscribe( (value) => {  this.dataA = value } );
      
  }

}
