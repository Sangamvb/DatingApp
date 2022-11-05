import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { AccountService } from 'src/app/_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private toastr:ToastrService,private accountservice:AccountService){}
  
  canActivate(): Observable<boolean>{
    return this.accountservice.currentUser$.pipe(
      map(user => {
        if (user)
          return true;
        this.toastr.error('!you shall not pass!');
      }));
  }
  
}
