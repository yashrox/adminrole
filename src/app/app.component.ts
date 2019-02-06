import { Component , OnInit } from '@angular/core';
import * as firebase from 'firebase' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(){
          firebase.initializeApp({
        apiKey: "AIzaSyB2yK8Tba8JJEJTr-G8Yebo7J1K7rE_oU4",
    authDomain: "admintask-d041e.firebaseapp.com",
      })
  }

    
  
}
