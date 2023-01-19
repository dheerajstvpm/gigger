import { Component } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUserData = {
    username: "",
    password: ""
  }

  constructor(private auth: AuthService, private router:Router) { }

  notifications = 1
  selected = new Date()

  loginUser() {
    console.log(this.loginUserData);
    this.auth.loginUser(this.loginUserData)
      .subscribe(
        {
          next: res => {
            console.log(res);
            localStorage.setItem("token",res.token)
            this.router.navigate(["/user/profile"])
          },
          error: err => {
            console.log(err);
          }
        }
      )
  }
}
