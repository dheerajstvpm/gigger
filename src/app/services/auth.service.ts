import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private signupUrl = Environment.backendURL + '/signup';
  private loginUrl = Environment.backendURL + '/login';
  private adminLoginUrl = Environment.backendURL + '/adminLogin';
  // private tokenUrl = Environment.backendURL+"/token"

  loginStatus: boolean = false;
  userType: string = '';

  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private router: Router,
  ) {}

  userRoute() {
    return /^(\/user).*/g.test(this.router.url);
  }
  adminRoute() {
    return /^(\/admin).*/g.test(this.router.url);
  }
  adminLoginRoute() {
    return /^(\/loginAdmin)/g.test(this.router.url);
  }
  signupUser(user: User) {
    return this.http.post<{ token: string; signupError: string }>(
      this.signupUrl,
      user,
    );
  }
  loginUser(user: User) {
    return this.http.post<{ token: string; loginError: string }>(
      this.loginUrl,
      user,
    );
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
  adminLogin(user: { username: string; password: string }) {
    return this.http.post<{ token: string; loginError: string }>(
      this.adminLoginUrl,
      user,
    );
  }
  adminLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/loginAdmin']);
  }
}
