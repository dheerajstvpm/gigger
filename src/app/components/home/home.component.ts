import { Router } from "@angular/router";
import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from "../../services/data.service";
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    profile!: User[];

    constructor(
        private dataService: DataService,
        private router: Router
    ) {}

    ngOnInit() {
        this.dataService.getUsers()
            .subscribe({
                next: res => {
                    console.log(`res:${res}`);
                    this.profile = res
                },
                error: err => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401 || 500) {
                            console.log(`Error:${err}`)
                            this.router.navigate(['/loginAdmin'])
                        }
                    }
                }
            })
    }
}
