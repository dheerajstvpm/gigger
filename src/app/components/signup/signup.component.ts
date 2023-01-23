import { Component } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {

    verifyOTP: boolean = false
    signupUserData = {
        artistFlag: false,
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
        otp: ""
    }
    signupError: string = ""
    displaySignupForm: boolean = false

    constructor(private auth: AuthService, private router: Router) { }
    notifications = 1
    selected = new Date()

    artistSignup() {
        this.signupUserData.artistFlag = true;
        this.displaySignupForm = true
    }

    signupForm() {
        this.displaySignupForm = true
    }

    passwordMatch() {
        if (this.signupUserData.password !== this.signupUserData.confirmPassword) {
            return false
        }
        return true
    }

    signupUser() {
        // console.log(this.signupUserData);
        this.auth.signupUser(this.signupUserData)
            .subscribe(
                {
                    next: res => {
                        console.log(res)
                        if (res.token === 'OTP sent') {
                            this.verifyOTP = true
                        } else if (res.signupError) {
                            console.log(res.signupError);
                            this.signupError = res.signupError
                        } else if (res.token) {
                            localStorage.setItem("token", res.token)
                            this.router.navigate(["/user/profile"])
                        }
                    },
                    error: err => {
                        console.log(err);
                    }
                }
            )
    }
}
