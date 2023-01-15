import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private dataService: DataService, private router: Router) { }

  canActivate(): any {
    if(this.auth.loggedIn()){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
    // this.auth.loggedIn()
    //   .subscribe({
    //     next: (res) => {
    //       return true
    //       // console.log(res)
    //       // this.profile = res
    //     },
    //     error: (err) => {
    //       return false
    //       // if (err instanceof HttpErrorResponse) {
    //       //   if (err.status === 401||500) {
    //       //     this.router.navigate(['/login'])
    //       //   }
    //       // }
    //     }
    //   })
  }
}