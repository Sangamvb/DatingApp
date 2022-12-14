import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating Application';
  users:any;

  constructor(private http: HttpClient,private accountservice:AccountService){}
  
  ngOnInit(): void {
    //this.getUsers();
    this.setCurrentUser();
  }
  setCurrentUser()
  {
    const user:User=JSON.parse(localStorage.getItem('user'));
    this.accountservice.setCurrentUser(user);
  }
  getUsers(){
    this.http.get('https://localhost:2001/api/Users').subscribe({
      next:response=>this.users=response,
      error:error=>console.log(error)
    })
  }
}
