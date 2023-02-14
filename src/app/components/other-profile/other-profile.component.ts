import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from "../../models/user";
import { MusicService } from 'src/app/services/music.service';
import { UpdateDataService } from "../../services/update-data.service";

@Component({
    selector: 'app-other-profile',
    templateUrl: './other-profile.component.html',
    styleUrls: ['./other-profile.component.css']
})
export class OtherProfileComponent {
    otherProfile!: User
    fileName = '';
    track = '';
    video = '';
    editOn: boolean = true;
    videoOn: boolean = false;
    trackName: string = ''
    routeId = ''

    constructor(
        private http: HttpClient,
        private dataService: DataService,
        private router: Router,
        private musicService: MusicService,
        private route: ActivatedRoute,
        private updateDataService: UpdateDataService,
    ) { }

    startVideo(video: HTMLImageElement) {
        this.video = video.id
        this.videoOn = true
        console.log(this.videoOn);
        console.log(this.video);
    }

    stopVideo(videoPlayer: HTMLVideoElement) {
        // videoPlayer.pause()
        this.video = ''
        this.videoOn = false
        console.log(this.videoOn);
        console.log(this.video);
    }

    changeTrack(track: HTMLImageElement) {
        this.track = track.id
        console.log(this.track);
        this.musicService.changeData(this.track, 0, false)
    }

    ngOnInit() {
        this.route.params
            .subscribe(params => {
                this.routeId = params['id'];
                this.dataService.getUsers()
                    .subscribe({
                        next: (res) => {
                            let result: any;
                            result = res.filter((item) => {
                                return item._id === this.routeId
                            })
                            this.otherProfile = result[0]
                            const confirmedBookings: any = this.otherProfile.eventBookings?.filter((item) => {
                                return item.isConfirmed
                            })
                            this.bookedDates = this.otherProfile.eventBookings?.map((item: any) => {
                                return item.bookingDate
                            })
                            console.log(this.bookedDates);
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
            });
    }

    title = 'angular-datepicker';
    selected!: any

    minDate = new Date()
    bookedDates !: any

    myFilter = (d: Date): boolean => {
        console.log(this.bookedDates[0]);

        // // add 24 hours to the date
        // d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
        // // truncate the time
        // // d.setHours(0, 0, 0, 0);
        // // d.toISOString().substring(0, 10)

        return !this.bookedDates.includes(d.toISOString().substring(0, 10))
    };

    submitDate() {
        console.log(this.selected)
        this.dataService.getProfile()
            .subscribe({
                next: (res) => {
                    console.log(res._id);
                    const bookingDate = this.selected.toISOString().substring(0, 10)
                    let other = this.otherProfile
                    const eventBooking = {
                        userId: res._id,
                        artistId: other._id,
                        bookingDate: bookingDate,
                        price: other.eventPricing,
                        isConfirmed: false,
                    }
                    other.eventBookings?.push(eventBooking)
                    this.updateDataService.updateProfile(other)
                        .subscribe({
                            next: (res) => {
                                console.log(`res:${res._id}`)
                                this.otherProfile = res
                                this.bookedDates = res.eventBookings?.map((item) => {
                                    return item.bookingDate
                                })
                                console.log(this.bookedDates);
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
                }, error: (err) => {

                }
            })

    }

}
