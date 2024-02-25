import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { Booking } from '../../models/booking';
import { UpdateDataService } from '../../services/update-data.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MusicService } from 'src/app/services/music.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Environment } from 'src/app/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  public environment = Environment;

  profile!: User;
  fileName = '';
  track = '';
  video = '';
  editOn: boolean = true;
  videoOn: boolean = false;
  trackName: string = '';

  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private updateDataService: UpdateDataService,
    private router: Router,
    public dialog: MatDialog,
    private musicService: MusicService,
  ) {}

  startVideo(video: HTMLImageElement) {
    this.video = video.id;
    this.videoOn = true;
    console.log(this.videoOn);
    console.log(this.video);
  }

  stopVideo(videoPlayer: HTMLVideoElement) {
    // videoPlayer.pause()
    this.video = '';
    this.videoOn = false;
    console.log(this.videoOn);
    console.log(this.video);
  }

  changeTrack(track: HTMLImageElement) {
    console.log(`previous:${this.track}`);
    this.track = track.id;
    console.log(`current:${this.track}`);
    this.musicService.changeData(this.track, 0, false);
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
        formData.append('file' + i, file);
        i++;
      }
    }
    console.log(formData);

    let uploadUrl = '';
    if (event.target.className === 'image-input') {
      uploadUrl = 'http://127.0.0.1:3000/api/imageUpload';
    }
    if (event.target.className === 'track-input') {
      uploadUrl = 'http://127.0.0.1:3000/api/trackUpload';
    }
    if (event.target.className === 'albumArt-input') {
      uploadUrl = 'http://127.0.0.1:3000/api/albumArtUpload';
    }
    if (event.target.className === 'video-input') {
      uploadUrl = 'http://127.0.0.1:3000/api/videoUpload';
    }
    if (event.target.className === 'thumbnail-input') {
      uploadUrl = 'http://127.0.0.1:3000/api/thumbnailUpload';
    }
    const blob = new Blob();
    formData.append('albumArt', blob, albumId);
    const upload$ = this.http.post(uploadUrl, formData);
    upload$.subscribe({
      next: (res) => {
        console.log(res);
        this.profile = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  editToggle() {
    this.editOn = false;
  }

  submitToggle() {
    this.editOn = true;
    this.updateDataService.updateProfile(this.profile).subscribe({
      next: (res) => {
        console.log(`res:${res}`);
        this.profile = res;
      },
      error: (err) => {
        console.log(`err:${err}`);
      },
    });
  }

  ngOnInit() {
    this.dataService.getProfile().subscribe({
      next: (res) => {
        console.log('out :' + res.eventBookings);
        let bookings: any;
        bookings = res.eventBookings?.filter((item) => {
          return !item.isConfirmed;
        });
        let confirmedBooking: any;
        confirmedBooking = res.eventBookings?.filter((item) => {
          return item.isConfirmed;
        });
        this.profile = res;
        this.dataSource.data = bookings;
        this.dataSource2.data = confirmedBooking;
      },
      error: (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 || 500) {
            console.log(`Error:${err}`);
            this.router.navigate(['/user/login']);
          }
        }
      },
    });
    this.musicService.music$.subscribe((res) => (this.track = res.track));
  }

  openTrackDialog(item: { name: string; albumArt: string }) {
    const nameStr = item.name.substring(item.name.indexOf('_') + 1);
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: nameStr,
        videoflag: false,
        item: item,
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((data) => console.log('Dialog output:', data));
  }

  openVideoDialog(item: { name: string; thumbnail: string }) {
    const nameStr = item.name.substring(item.name.indexOf('_') + 1);
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: nameStr,
        videoFlag: true,
        item: item,
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((data) => console.log('Dialog output:', data));
  }

  confirmBooking(element: any) {
    let eventBookings: any;
    eventBookings = this.profile.eventBookings;
    for (let one of eventBookings) {
      if (one._id === element._id) {
        one.isConfirmed = true;
      }
    }
    this.profile.eventBookings = eventBookings;
    this.updateDataService.updateProfile(this.profile).subscribe({
      next: (res) => {
        console.log(`res:${res}`);
        this.profile = res;
      },
      error: (err) => {
        console.log(`err:${err}`);
      },
    });
  }

  title = 'angular-datepicker';

  displayedColumns: string[] = [
    '_id',
    'userId',
    'artistId',
    'payment',
    'bookingDate',
    'isConfirmed',
  ];
  dataSource = new MatTableDataSource<User>();
  dataSource2 = new MatTableDataSource<User>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource2.sort = this.sort;
    this.dataSource2.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilter2(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();

    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }

  addFavourite(artist: string) {
    this.profile.favouriteArtists?.push(artist);
    this.updateDataService.updateProfile(this.profile).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  removeFavourite(artist: string) {
    let index: any;
    index = this.profile.favouriteArtists?.indexOf(artist);
    if (index > -1) {
      // only splice array when item is found
      this.profile.favouriteArtists?.splice(index, 1); // 2nd parameter means remove one item only
    }
    this.updateDataService.updateProfile(this.profile).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
