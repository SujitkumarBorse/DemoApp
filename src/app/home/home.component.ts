import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userList =[];
  constructor() { }

  ngOnInit() {
  this.userList = JSON.parse(localStorage.getItem("userList"));
  console.log(this.userList);
  }

}
