import { Component, OnInit } from '@angular/core';
import { groups } from '../../services/group.services'

@Component({
  selector: 'app-group-c',
  templateUrl: './group-c.component.html',
  styleUrls: ['./group-c.component.css']
})
export class GroupCComponent implements OnInit {

  constructor(private grps : groups ) { }

  dataC  : any[]

  ngOnInit() {
         this.dataC = this.grps.getsdataC();
          this.grps.newdataC.subscribe( (value) => {  this.dataC = value } );
  }


}
