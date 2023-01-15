import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signupUrl="http://localhost:3000/api/signup"
  private loginUrl="http://localhost:3000/api/login"
  private profileUrl="http://localhost:3000/api/profile"

  constructor(private http:HttpClient, private router:Router) { }

  signupUser(user:User){
    return this.http.post<{token:string}>(this.signupUrl,user)
  }
  loginUser(user:User){
    return this.http.post<{token:string}>(this.loginUrl,user)
  }
  loggedIn() {
    return !!localStorage.getItem('token')
    // return this.http.get<any>(this.profileUrl)
  }
  getToken() {
    return localStorage.getItem('token')
  }
  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
