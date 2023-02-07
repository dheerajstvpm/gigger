import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Booking } from "../../models/booking";
import { User } from "../../models/user";
import { DataService } from "../../services/data.service";
import { UpdateDataService } from "../../services/update-data.service";
import { Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-discover',
    templateUrl: './discover.component.html',
    styleUrls: ['./discover.component.css']
})
export class DiscoverComponent {
    constructor(
        private dataService: DataService,
        private updateDataService: UpdateDataService,
        private router: Router
    ) { }
    displayedColumns: string[] = ['_id', 'name', 'image', 'likes'];
    dataSource = new MatTableDataSource<User>();

    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
    }
    ngOnInit() {
        this.dataService.getUsers()
            .subscribe({
                next: res => {
                    console.log(`res:${res}`);
                    let artists: any
                    artists = res.filter(item => {
                        return item.artistFlag
                    })
                    let favourites: any
                    favourites = res.map(item => {
                        return item.favouriteArtists
                    })
                    favourites=favourites.flat()
                    console.log(favourites);
                    let out: any;
                    out = artists.map((item: any) => {
                        let result = {
                            _id: item._id,
                            name: item.name,
                            image: item.profileImage,
                            likes: 0
                        }
                        for (let one of favourites) {
                            if (item._id === one) {
                                result.likes++
                            }
                        }
                        return result
                    })
                    console.log(out);
                    this.dataSource.data = out
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

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}

