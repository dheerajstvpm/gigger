import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from "./auth.guard";
import { ArtistDetailsComponent } from './adminComponents/artist-details/artist-details.component';
import { UserDetailsComponent } from './adminComponents/user-details/user-details.component';
import { BookingDetailsComponent } from './adminComponents/booking-details/booking-details.component';
import { RequestDetailsComponent } from './adminComponents/request-details/request-details.component';
import { DashboardComponent } from './adminComponents/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "user",
    redirectTo: "/user/profile",
    pathMatch: "full"
  },
  {
    path: "user/signup",
    component: SignupComponent
  },
  {
    path: "user/login",
    component: LoginComponent
  },
  {
    path: "user/profile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "admin",
    redirectTo: "/admin/dashboard",
    pathMatch: "full"
  },
  {
    path: "admin/dashboard",
    component: DashboardComponent
  },
  {
    path: "admin/artistDetails",
    component: ArtistDetailsComponent
  },
  {
    path: "admin/userDetails",
    component: UserDetailsComponent
  },
  {
    path: "admin/bookingDetails",
    component: BookingDetailsComponent
  },
  {
    path: "admin/requestDetails",
    component: RequestDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
