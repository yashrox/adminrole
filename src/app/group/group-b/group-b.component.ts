import { Component, OnInit } from '@angular/core';
import { groups } from '../../services/group.services'

@Component({
  selector: 'app-group-b',
  templateUrl: './group-b.component.html',
  styleUrls: ['./group-b.component.css']
})
export class GroupBComponent implements OnInit {

  constructor(private grps : groups ) { }

  dataB  : any[]

  ngOnInit() {
         this.dataB = this.grps.getsdataB();
          this.grps.newdataB.subscribe( (value) => {  this.dataB = value } );
  }

}
