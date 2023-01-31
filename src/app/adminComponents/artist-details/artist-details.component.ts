import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from "../../models/user";
import { DataService } from "../../services/data.service";
import { UpdateDataService } from "../../services/update-data.service";
import { Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-artist-details',
    templateUrl: './artist-details.component.html',
    styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent {
    dtOptions: DataTables.Settings = {}
    dtTrigger: Subject<any> = new Subject<any>()
    artists!: User[]

    constructor(private dataService: DataService, private updateDataService: UpdateDataService, private router: Router) { }
    blockUser(artist: User) {
        artist.blockStatus = true
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
        artist.blockStatus = false
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
                    this.artists = res.filter((x) => {
                        return x.artistFlag === true
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
