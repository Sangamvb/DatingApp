import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/_services/account.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={}
  constructor(public accountService: AccountService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  Login(){
    this.accountService.Login(this.model).subscribe({
      //next: response=> console.log(response),
      next: response=> this.router.navigateByUrl('members'),
      error:error=> this.toastr.error(error.error)
    })
  }
  
  Logout(){
        this.accountService.logout();
        this.router.navigateByUrl('members');
      }
}
