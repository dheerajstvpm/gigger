import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Router } from "@angular/router";
import { DataService } from './data.service';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private signupUrl = "http://localhost:3000/api/signup"
    private loginUrl = "http://localhost:3000/api/login"
    private adminLoginUrl = "http://localhost:3000/api/adminLogin"
    // private tokenUrl = "http://localhost:3000/api/token"

    loginStatus: boolean = false
    userType:string=''

    constructor(private http: HttpClient, private dataService: DataService, private router: Router) { }

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
        return this.http.post<{ token: string, signupError: string }>(this.signupUrl, user)
    }
    loginUser(user: User) {
        return this.http.post<{ token: string, loginError: string }>(this.loginUrl, user)
    }
    loggedIn() {
        return !!localStorage.getItem('token')
    }
    getToken() {
        return localStorage.getItem('token')
    }
    logout() {
        localStorage.removeItem('token')
        this.router.navigate(['/user/login'])
    }
    adminLogin(user: { username: string, password: string }) {
        return this.http.post<{ token: string, loginError: string }>(this.adminLoginUrl, user)
    }
    adminLogout() {
        localStorage.removeItem('token')
        this.router.navigate(['/loginAdmin'])
    }
}

