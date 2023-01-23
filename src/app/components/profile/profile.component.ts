import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";
import { User } from "../../models/user";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    artistFlag:boolean = false
    profile!:User

    constructor(private dataService: DataService, private router: Router) { }

    ngOnInit() {
        this.dataService.getProfile()
            .subscribe({
                next: (res) => {
                    console.log(`res:${res._id}`)
                    this.artistFlag=res.artistFlag
                    this.profile=res
                },
                error: (err) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401 || 500) {
                            console.log(`Error:${err}`)
                            this.router.navigate(['/user/login'])
                        }
                    }
                }
            })
    }
}
