import { Component, Inject } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { UpdateDataService } from 'src/app/services/update-data.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.css'],
})
export class BookingDialogComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    public dialogRef: MatDialogRef<BookingDialogComponent>,
    private dataService: DataService,
    private updateDataService: UpdateDataService,
    @Inject(MAT_DIALOG_DATA)
    public data: { artist: string; date: string; other: any },
  ) {}

  bookedDates!: any;
  otherProfile!: User;

  bookEvent() {
    console.log(this.data.date);
    this.dataService.getProfile().subscribe({
      next: (res) => {
        console.log(res._id);
        const bookingDate = this.data.date;
        let other = this.data.other;
        const eventBooking = {
          userId: res._id,
          artistId: other._id,
          bookingDate: bookingDate,
          price: other.eventPricing,
          isConfirmed: false,
        };
        res.eventBookings?.push(eventBooking);
        other.eventBookings?.push(eventBooking);
        this.updateDataService.updateProfile(other).subscribe({
          next: (res) => {
            console.log(`res:${res._id}`);
            this.otherProfile = res;
            this.bookedDates = res.eventBookings?.map((item) => {
              return item.bookingDate;
            });
            console.log(this.bookedDates);
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
        this.updateDataService.updateProfile(res).subscribe({
          next: (res) => {
            console.log(`res:${res._id}`);
            this.otherProfile = res;
            this.bookedDates = res.eventBookings?.map((item) => {
              return item.bookingDate;
            });
            console.log(this.bookedDates);
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
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.dialogRef.close({ res: 'Booking submitted successfully' });
  }
}
