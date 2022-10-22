import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  regiserMode=false;
  users:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.getUsers();
    console.log(this.users);
  }
  registerToggle(){
    this.regiserMode=!this.regiserMode;
  }
  getUsers(){
    this.http.get('https://localhost:2001/api/Users').subscribe(users=> this.users=users);
  }
  cancelRegistrationMode(event: boolean) {
    this.regiserMode=event;
  }
}
