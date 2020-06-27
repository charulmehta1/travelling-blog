import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedInUserName;
  loggedInUserEmail;


  constructor() { }

  ngOnInit(): void {
    this.loggedInUserEmail= localStorage.getItem('email');
    this.loggedInUserName = localStorage.getItem('username')
    
  }

}
