import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard {
  constructor(
    private auth: AuthService,
    private dataService: DataService,
    private router: Router,
  ) {}

  canActivate(): any {
    if (this.auth.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/loginAdmin']);
      return false;
    }
  }
}
