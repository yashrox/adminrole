import { Component, OnInit } from '@angular/core';
import { groups } from '../../services/group.services'

@Component({
  selector: 'app-group-d',
  templateUrl: './group-d.component.html',
  styleUrls: ['./group-d.component.css']
})
export class GroupDComponent implements OnInit {

  constructor(private grps : groups ) { }

  dataD  : any[]

  ngOnInit() {
         this.dataD = this.grps.getsdataD();
          this.grps.newdataD.subscribe( (value) => {  this.dataD = value } );
  }

}
