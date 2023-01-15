import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profile = {}

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getProfile()
      .subscribe({
        next: (res) => {
          console.log(res)
          this.profile = res
        },
        error: (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401||500) {
              this.router.navigate(['/login'])
            }
          }
        }
      })
  }
}