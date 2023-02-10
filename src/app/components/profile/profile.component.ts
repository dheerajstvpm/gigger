import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";
import { User } from "../../models/user";
import { Booking } from "../../models/booking";
import { UpdateDataService } from "../../services/update-data.service";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from "../dialog/dialog.component";
import { MusicService } from 'src/app/services/music.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    profile!: User
    fileName = '';
    track = '';
    video = '';
    editOn: boolean = true;
    videoOn: boolean = false;
    trackName: string = ''

    constructor(
        private http: HttpClient,
        private dataService: DataService,
        private updateDataService: UpdateDataService,
        private router: Router,
        public dialog: MatDialog,
        private musicService: MusicService
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
        console.log(`previous:${this.track}`);
        this.track = track.id
        console.log(`current:${this.track}`);
        this.musicService.changeData(this.track, 0, false)
    }

    // isPaused(player: HTMLAudioElement) {
    //     return player.paused
    // }

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
                this.profile = res
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
        this.updateDataService.updateProfile(this.profile)
            .subscribe({
                next: res => {
                    console.log(`res:${res}`);
                    this.profile = res
                },
                error: err => {
                    console.log(`err:${err}`);
                }
            })
    }

    ngOnInit() {
        this.dataService.getProfile()
            .subscribe({
                next: (res) => {
                    console.log(res.eventBookings)
                    let bookings: any
                    bookings = res.eventBookings
                    this.profile = res
                    this.dataSource.data = bookings
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
        this.musicService.music$
            .subscribe(res => this.track = res.track)
    }

    openTrackDialog(item: { name: string, albumArt: string }) {
        const nameStr = item.name.substring(item.name.indexOf("_") + 1);
        const dialogRef = this.dialog.open(DialogComponent, {
            data: {
                title: nameStr,
                videoflag: false,
                item: item
            }
        });
        dialogRef.afterClosed()
            .subscribe(
                data => console.log("Dialog output:", data)
            )
    }

    openVideoDialog(item: { name: string, thumbnail: string }) {
        const nameStr = item.name.substring(item.name.indexOf("_") + 1);
        const dialogRef = this.dialog.open(DialogComponent, {
            data: {
                title: nameStr,
                videoFlag: true,
                item: item
            }
        });
        dialogRef.afterClosed()
            .subscribe(
                data => console.log("Dialog output:", data)
            )
    }

    title = 'angular-datepicker';

    displayedColumns: string[] = ['_id', 'userId', 'artistId', 'payment', 'bookingDate', 'isConfirmed'];
    dataSource = new MatTableDataSource<User>();

    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
    }

    applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}