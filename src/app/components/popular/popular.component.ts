import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Booking } from "../../models/booking";
import { User } from "../../models/user";
import { DataService } from "../../services/data.service";
import { UpdateDataService } from "../../services/update-data.service";
import { Router } from "@angular/router";
import { MusicService } from 'src/app/services/music.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-popular',
    templateUrl: './popular.component.html',
    styleUrls: ['./popular.component.css']
})
export class PopularComponent {

    profile!: User;

    constructor(
        private http: HttpClient,
        private dataService: DataService,
        private updateDataService: UpdateDataService,
        private router: Router,
        private musicService: MusicService
    ) { }
    displayedColumns: string[] = ['_id', 'name', 'image', 'likes', 'userLike'];
    dataSource = new MatTableDataSource<User>();

    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
    }

    ngOnInit() {
        this.dataService.getProfile()
            .subscribe({
                next: (res) => {
                    console.log(`res:${res._id}`)
                    this.profile = res
                    this.dataService.getUsers()
                        .subscribe({
                            next: res2 => {
                                console.log(`res2:${res2}`);
                                let tracks: any
                                tracks = res2.map(item => {
                                    return item.tracks
                                })
                                tracks = tracks.flat()
                                console.log(tracks);
                                let favourites: any
                                favourites = res2.map(item => {
                                    return item.favouriteTracks
                                })
                                favourites = favourites.flat()
                                console.log(favourites);
                                let userFavourites: any;
                                userFavourites = this.profile.favouriteTracks
                                let out: any
                                out = tracks.map((item: any) => {
                                    let result = {
                                        _id: item._id,
                                        name: item.name,
                                        image: item.albumArt,
                                        likes: 0,
                                        userLike: false
                                    }
                                    for (let one of favourites) {
                                        if (item.name === one) {
                                            result.likes++
                                        }
                                    }
                                    for (let i of userFavourites) {
                                        if (item.name === i) {
                                            result.userLike = true
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

    changeTrack(track: string) {
        this.musicService.changeData(track, 0, false)
    }

    addFavourite(track: string) {
        this.profile.favouriteTracks?.push(track)
        this.updateDataService.updateProfile(this.profile)
            .subscribe({
                next: (res) => {
                    console.log(res);
                    this.profile = res
                    this.dataService.getUsers()
                        .subscribe({
                            next: res2 => {
                                console.log(`res2:${res2}`);
                                let tracks: any
                                tracks = res2.map(item => {
                                    return item.tracks
                                })
                                tracks = tracks.flat()
                                console.log(tracks);
                                let favourites: any
                                favourites = res2.map(item => {
                                    return item.favouriteTracks
                                })
                                favourites = favourites.flat()
                                console.log(favourites);
                                let userFavourites: any;
                                userFavourites = this.profile.favouriteTracks
                                let out: any
                                out = tracks.map((item: any) => {
                                    let result = {
                                        _id: item._id,
                                        name: item.name,
                                        image: item.albumArt,
                                        likes: 0,
                                        userLike: false
                                    }
                                    for (let one of favourites) {
                                        if (item.name === one) {
                                            result.likes++
                                        }
                                    }
                                    for (let i of userFavourites) {
                                        if (item.name === i) {
                                            result.userLike = true
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
                },
                error: (err) => {
                    console.log(err);
                }
            })
    }

    removeFavourite(track: string) {
        let index: any
        index = this.profile.favouriteTracks?.indexOf(track);
        if (index > -1) { // only splice array when item is found
            this.profile.favouriteTracks?.splice(index, 1); // 2nd parameter means remove one item only
        }
        this.updateDataService.updateProfile(this.profile)
            .subscribe({
                next: (res) => {
                    console.log(res);
                    this.profile = res;
                    this.dataService.getUsers()
                        .subscribe({
                            next: res2 => {
                                console.log(`res2:${res2}`);
                                let tracks: any
                                tracks = res2.map(item => {
                                    return item.tracks
                                })
                                tracks = tracks.flat()
                                console.log(tracks);
                                let favourites: any
                                favourites = res2.map(item => {
                                    return item.favouriteTracks
                                })
                                favourites = favourites.flat()
                                console.log(favourites);
                                let userFavourites: any;
                                userFavourites = this.profile.favouriteTracks
                                let out: any
                                out = tracks.map((item: any) => {
                                    let result = {
                                        _id: item._id,
                                        name: item.name,
                                        image: item.albumArt,
                                        likes: 0,
                                        userLike: false
                                    }
                                    for (let one of favourites) {
                                        if (item.name === one) {
                                            result.likes++
                                        }
                                    }
                                    for (let i of userFavourites) {
                                        if (item.name === i) {
                                            result.userLike = true
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
                },
                error: (err) => {
                    console.log(err);
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

