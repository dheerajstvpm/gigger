import { Router } from "@angular/router";
import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from "../../services/data.service";
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { MusicService } from "src/app/services/music.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    profile!: User[];
    trackList!: {
        _id: '';
        name: '';
        image: '';
        likes: 0;
    }[];
    allEvents!: {
        userId: string,
        artistId: string,
        bookingDate: string,
        payment: number,
        isConfirmed: boolean
    }

    constructor(
        private dataService: DataService,
        private router: Router,
        private musicService: MusicService,
    ) { }

    ngOnInit() {
        this.dataService.getUsers()
            .subscribe({
                next: res => {
                    console.log(`res:${res}`);
                    const artists = res.filter(item => {
                        return item.artistFlag
                    })
                    this.profile = artists

                    let events: any
                    events = res.map(item => {
                        return item.eventBookings
                    })
                    events = events.flat()
                    let allEvents: any
                    allEvents = events.filter((item: { isConfirmed: any; }) => {
                        return item.isConfirmed
                    })
                    allEvents = allEvents.flat()
                    this.allEvents = allEvents
                    console.log(this.allEvents);


                    let tracks: any
                    tracks = res.map(item => {
                        return item.tracks
                    })
                    tracks = tracks.flat()
                    console.log(tracks);
                    let favouriteTracks: any
                    favouriteTracks = res.map(item => {
                        return item.favouriteTracks
                    })
                    favouriteTracks = favouriteTracks.flat()
                    console.log(favouriteTracks);
                    let trackList: any
                    trackList = tracks.map((item: any) => {
                        let result = {
                            _id: item._id,
                            name: item.name,
                            image: item.albumArt,
                            likes: 0
                        }
                        for (let one of favouriteTracks) {
                            if (item.name === one) {
                                result.likes++
                            }
                        }
                        return result
                    })
                    console.log(trackList)
                    trackList = trackList.sort(function (a: any, b: any) { a.likes - b.likes })
                    console.log(trackList)
                    this.trackList = trackList
                    console.log(this.trackList)
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



    changeTrack(track: string) {
        this.musicService.changeData(track, 0, false)
    }

}
