import { Component, OnInit } from '@angular/core';
import {Request} from '../services/formrequest.services'


@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css']
})
export class NavsComponent implements OnInit {

  constructor(private req : Request) { }

  ngOnInit() {
  }
  
    onlogout(){
          this.req.logout();
    } 
}
