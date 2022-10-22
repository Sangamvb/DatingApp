import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '_services/account.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={}
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  Login(){
    this.accountService.Login(this.model).subscribe({
      next: response=> console.log(response),
      error:error=>console.log(error)
    })
  }
  
  Logout(){
        this.accountService.logout();
      }
}
