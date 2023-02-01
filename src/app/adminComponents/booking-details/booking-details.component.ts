import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from "../../models/user";
import { DataService } from "../../services/data.service";
import { UpdateDataService } from "../../services/update-data.service";
import { Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';

// export interface UserData {
//     'Sl.': string;
//     'Artist name': string;
//     'Username': string;
//     'Block status': boolean;
// }

/** Constants used to fill up our data base. */
// const FRUITS: string[] = [
//     'blueberry',
//     'lychee',
//     'kiwi',
//     'mango',
//     'peach',
//     'lime',
//     'pomegranate',
//     'pineapple',
// ];
// const NAMES: string[] = [
//     'Maia',
//     'Asher',
//     'Olivia',
//     'Atticus',
//     'Amelia',
//     'Jack',
//     'Charlotte',
//     'Theodore',
//     'Isla',
//     'Oliver',
//     'Isabella',
//     'Jasper',
//     'Cora',
//     'Levi',
//     'Violet',
//     'Arthur',
//     'Mia',
//     'Thomas',
//     'Elizabeth',
// ];
@Component({
    selector: 'app-booking-details',
    templateUrl: './booking-details.component.html',
    styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements AfterViewInit {
    displayedColumns: string[] = ['Sl.', 'Artist name', 'Username', 'Block status'];
    dataSource!: MatTableDataSource<User>;

    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
    @ViewChild(MatSort)
    sort!: MatSort;

    artists!: User[]

    ngOnInit() {
        this.dataService.getUsers()
            .subscribe({
                next: res => {
                    console.log(`res:${res}`);
                    let rtists = res.filter((x) => {
                        return x.artistFlag === true
                    })
                    console.log(`out : ${rtists[0].name}`)
                    this.artists = rtists.filter((item) => {
                        return {
                            "Artist name": item.name,
                            "Username": item.username,
                            "Block status": item.blockStatus,
                        }
                    })
                    console.log(this.artists);
                    // Create 100 users
                    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
                    const users = this.artists
                    console.log(`users:${users}`);
                    // Assign the data to the data source for the table to render
                    this.dataSource = new MatTableDataSource(users);
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

    constructor(private dataService: DataService, private updateDataService: UpdateDataService, private router: Router) {

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

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
}