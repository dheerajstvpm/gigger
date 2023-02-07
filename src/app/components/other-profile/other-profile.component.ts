import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from "../../models/user";
import { MusicService } from 'src/app/services/music.service';


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
        this.route.params.subscribe(params => {
            this.routeId = params['id'];
        });
        this.dataService.getUsers()
            .subscribe({
                next: (res) => {
                    let result: any;
                    result = res.filter((item) => {
                        return item._id === this.routeId
                    })
                    this.otherProfile = result[0]
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
