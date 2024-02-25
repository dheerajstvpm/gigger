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
import { Environment } from 'src/app/environment';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
})
export class DiscoverComponent {
  profile!: User;
  public environment = Environment;


  constructor(
    private dataService: DataService,
    private updateDataService: UpdateDataService,
    private router: Router,
  ) {}
  displayedColumns: string[] = ['_id', 'name', 'image', 'likes', 'userLike'];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataService.getProfile().subscribe({
      next: (res) => {
        console.log(`res:${res._id}`);
        this.profile = res;
        this.dataService.getUsers().subscribe({
          next: (res2) => {
            console.log(`res2:${res2}`);
            let artists: any;
            artists = res2.filter((item) => {
              return item.artistFlag;
            });
            let favourites: any;
            favourites = res2.map((item) => {
              return item.favouriteArtists;
            });
            favourites = favourites.flat();
            console.log(favourites);
            let userFavourites: any;
            userFavourites = this.profile.favouriteArtists;
            let out: any;
            out = artists.map((item: any) => {
              let result = {
                _id: item._id,
                name: item.name,
                image: item.profileImage,
                likes: 0,
                userLike: false,
              };
              for (let one of favourites) {
                if (item._id === one) {
                  result.likes++;
                }
              }
              for (let i of userFavourites) {
                if (item._id === i) {
                  result.userLike = true;
                }
              }
              return result;
            });
            console.log('out' + out);
            this.dataSource.data = out;
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
  }

  addFavourite(artist: string) {
    this.profile.favouriteArtists?.push(artist);
    this.updateDataService.updateProfile(this.profile).subscribe({
      next: (res) => {
        console.log(res);
        this.profile = res;
        this.dataService.getUsers().subscribe({
          next: (res2) => {
            console.log(`res2:${res2}`);
            let artists: any;
            artists = res2.filter((item) => {
              return item.artistFlag;
            });
            let favourites: any;
            favourites = res2.map((item) => {
              return item.favouriteArtists;
            });
            favourites = favourites.flat();
            console.log(favourites);
            let userFavourites: any;
            userFavourites = this.profile.favouriteArtists;
            let out: any;
            out = artists.map((item: any) => {
              let result = {
                _id: item._id,
                name: item.name,
                image: item.profileImage,
                likes: 0,
                userLike: false,
              };
              for (let one of favourites) {
                if (item._id === one) {
                  result.likes++;
                }
              }
              for (let i of userFavourites) {
                if (item._id === i) {
                  result.userLike = true;
                }
              }
              return result;
            });
            console.log(out);
            this.dataSource.data = out;
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
        this.profile = res;
        this.dataService.getUsers().subscribe({
          next: (res2) => {
            console.log(`res2:${res2}`);
            let artists: any;
            artists = res2.filter((item) => {
              return item.artistFlag;
            });
            let favourites: any;
            favourites = res2.map((item) => {
              return item.favouriteArtists;
            });
            favourites = favourites.flat();
            console.log(favourites);
            let userFavourites: any;
            userFavourites = this.profile.favouriteArtists;
            let out: any;
            out = artists.map((item: any) => {
              let result = {
                _id: item._id,
                name: item.name,
                image: item.profileImage,
                likes: 0,
                userLike: false,
              };
              for (let one of favourites) {
                if (item._id === one) {
                  result.likes++;
                }
              }
              for (let i of userFavourites) {
                if (item._id === i) {
                  result.userLike = true;
                }
              }
              return result;
            });
            console.log(out);
            this.dataSource.data = out;
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
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
