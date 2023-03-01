import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from "./auth.guard";
import { AdminAuthGuard } from './admin-auth.guard';
import { ArtistDetailsComponent } from './adminComponents/artist-details/artist-details.component';
import { UserDetailsComponent } from './adminComponents/user-details/user-details.component';
import { BookingDetailsComponent } from './adminComponents/booking-details/booking-details.component';
import { AdminLoginComponent } from './adminComponents/admin-login/admin-login.component';
import { DashboardComponent } from './adminComponents/dashboard/dashboard.component';
import { PaymentDetailsComponent } from './adminComponents/payment-details/payment-details.component';
import { HomeComponent } from './components/home/home.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { PopularComponent } from './components/popular/popular.component';
import { OtherProfileComponent } from './components/other-profile/other-profile.component';

const routes: Routes = [
  {
    path: "app",
    redirectTo: "/user/home",
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
    path: "user/home",
    component: HomeComponent
  },
  {
    path: "user/discover",
    component: DiscoverComponent
  },
  {
    path: "user/popular",
    component: PopularComponent
  },
  {
    path: "user/otherProfile/:id",
    component: OtherProfileComponent
  },
  {
    path: "user/profile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "admin",
    redirectTo: "/loginAdmin",
    pathMatch: "full"
  },
  {
    path: "loginAdmin",
    component: AdminLoginComponent
  },
  {
    path: "admin/dashboard",
    component: DashboardComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: "admin/artistDetails",
    component: ArtistDetailsComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: "admin/userDetails",
    component: UserDetailsComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: "admin/bookingDetails",
    component: BookingDetailsComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: "admin/paymentDetails",
    component: PaymentDetailsComponent,
    canActivate: [AdminAuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
