import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Booking } from '../../models/booking';
import { User } from '../../models/user';
import { DataService } from '../../services/data.service';
import { UpdateDataService } from '../../services/update-data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
})
export class BookingDetailsComponent {
  constructor(
    private dataService: DataService,
    private updateDataService: UpdateDataService,
    private router: Router,
  ) {}
  displayedColumns: string[] = [
    '_id',
    'type',
    'userId',
    'artistId',
    'bookingDate',
    'price',
    'bookingStatus',
  ];
  dataSource = new MatTableDataSource<Booking>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    this.dataService.getUsers().subscribe({
      next: (res) => {
        console.log(`res:${res}`);
        let items: any;
        items = res.map((item) => {
          return item.eventBookings;
        });
        this.dataSource.data = items.flat();
      },
      error: (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 || 500) {
            console.log(`Error:${err}`);
            this.router.navigate(['/loginAdmin']);
          }
        }
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
