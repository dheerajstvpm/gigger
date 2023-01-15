import { Component } from '@angular/core';
import { User } from "../../models/user";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupUserData:User = {
    name: "",
    username: "",
    mobile: undefined,
    password: ""
  }

  constructor(private auth: AuthService, private router:Router) { }
  notifications = 1
  selected = new Date()

  signupUser() {
    // console.log(this.signupUserData);
    this.auth.signupUser(this.signupUserData)
      .subscribe(
        {
          next: res => {
            console.log(res);
            localStorage.setItem("token",res.token)
            this.router.navigate(["/profile"]) 
          },
          error: err => {
            console.log(err);
          }
        }
      )
  }
}
