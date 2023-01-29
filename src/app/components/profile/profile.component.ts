import { HttpErrorResponse, HttpClient } from '@angular/common/http';
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

    artistFlag: boolean = false
    profile!: User
    fileName = '';
    track = '';
    video='';
    editOn: boolean = true;
    videoOn: boolean = false;

    constructor(private http: HttpClient, private dataService: DataService, private router: Router) { }

    startVideo(video: HTMLImageElement) {
        this.video = video.id
        this.videoOn = true
        console.log(this.videoOn);
        console.log(this.video);
    }

    stopVideo() {
        this.video = ''
        this.videoOn = false
        console.log(this.videoOn);
        console.log(this.video);
    }

    changeTrack(track: HTMLImageElement) {
        this.track = track.id
        console.log(this.track);
    }

    deleteTrack(track: { name: string, albumArt?: string }) {
        const deleteUrl = "http://localhost:3000/api/trackDelete"
        const deleteTrack$ = this.http.post(deleteUrl, track);
        deleteTrack$.subscribe({
            next: (res) => {
                console.log(res);
            },
            error: (err) => {
                console.log(err);
            }
        })
    }

    deleteVideo(video: { name: string }) {
        const deleteUrl = "http://localhost:3000/api/videoDelete"
        const deleteVideo$ = this.http.post(deleteUrl, video);
        deleteVideo$.subscribe({
            next: (res) => {
                console.log(res);
            },
            error: (err) => {
                console.log(err);
            }
        })
    }

    onFileSelected(event: any, albumId: string) {
        const files: File[] = event.target.files;
        console.log(event.target.className);
        console.log(albumId);

        const formData = new FormData();
        let i = 0;
        for (let file of files) {
            if (file) {
                this.fileName = file.name;
                formData.append("file" + i, file);
                i++
            }
        }
        let uploadUrl = ""
        if (event.target.className === "image-input") {
            uploadUrl = "http://localhost:3000/api/imageUpload"
        }
        if (event.target.className === "track-input") {
            uploadUrl = "http://localhost:3000/api/trackUpload"
        }
        if (event.target.className === "albumArt-input") {
            uploadUrl = "http://localhost:3000/api/albumArtUpload"
        }
        if (event.target.className === "video-input") {
            uploadUrl = "http://localhost:3000/api/videoUpload"
        }
        if (event.target.className === "thumbnail-input") {
            uploadUrl = "http://localhost:3000/api/thumbnailUpload"
        }
        const blob = new Blob();
        formData.append("albumArt", blob, albumId);
        const upload$ = this.http.post(uploadUrl, formData);
        upload$.subscribe({
            next: (res) => {
                console.log(res);
            },
            error: (err) => {
                console.log(err);
            }
        })
    }

    editToggle() {
        this.editOn = false
    }

    submitToggle() {
        this.editOn = true
    }

    ngOnInit() {
        this.dataService.getProfile()
            .subscribe({
                next: (res) => {
                    console.log(`res:${res._id}`)
                    this.artistFlag = res.artistFlag
                    this.profile = res
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
