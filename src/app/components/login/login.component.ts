import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginUserData = {
    username: '',
    password: '',
  };

  loginError: string = '';
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  notifications = 1;
  selected = new Date();

  loginUser() {
    console.log(this.loginUserData);
    this.auth.loginUser(this.loginUserData).subscribe({
      next: (res) => {
        console.log(`res:${res}`);
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/user/profile']);
        }
        if (res.loginError) {
          console.log(res.loginError);
          this.loginError = res.loginError;
        }
      },
      error: (err) => {
        // if (err instanceof HttpErrorResponse) {
        //     if (err.status === 401 || 500) {
        //         console.log(`Error:${err}`)
        //         this.signUpError=err.error
        //         console.log(this.signUpError);
        //         // this.router.navigate(['/user/login'])
        //     }
        // }
        console.log(`err:${err}`);
      },
    });
  }
  ngOnInit() {
    if (this.auth.loggedIn()) {
      this.router.navigate(['/user/profile']);
    }
  }
}
