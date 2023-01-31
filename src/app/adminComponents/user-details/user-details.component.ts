import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from "../../models/user";
import { DataService } from "../../services/data.service";
import { UpdateDataService } from "../../services/update-data.service";
import { Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
    dtOptions: DataTables.Settings = {}
    artists!: User[]
    dtTrigger:Subject<any>=new Subject<any>()

    constructor(private dataService: DataService, private updateDataService: UpdateDataService, private router: Router) { }

    blockUser(artist: User) {
        artist.blockStatus=true
        this.updateDataService.updateProfile(artist)
            .subscribe({
                next: res => {
                    console.log(`res:${res}`);
                },
                error: err => {
                    console.log(`err:${err}`);
                }
            })
    }
    unblockUser(artist: User) {
        artist.blockStatus=false
        this.updateDataService.updateProfile(artist)
            .subscribe({
                next: res => {
                    console.log(`res:${res}`);
                },
                error: err => {
                    console.log(`err:${err}`);
                }
            })
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers'
        }
        this.dataService.getUsers()
            .subscribe({
                next: res => {
                    console.log(`res:${res}`);
                    this.artists=res.filter((x)=>{
                        return x.artistFlag===false
                    })
                    this.dtTrigger.next(null)
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
