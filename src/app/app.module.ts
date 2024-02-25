import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { DashboardComponent } from './adminComponents/dashboard/dashboard.component';
import { ArtistDetailsComponent } from './adminComponents/artist-details/artist-details.component';
import { UserDetailsComponent } from './adminComponents/user-details/user-details.component';
import { BookingDetailsComponent } from './adminComponents/booking-details/booking-details.component';
import { VerifyOTPComponent } from './components/verify-otp/verify-otp.component';
import { PaymentDetailsComponent } from './adminComponents/payment-details/payment-details.component';
import { AdminLoginComponent } from './adminComponents/admin-login/admin-login.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { RemovePrefixPipe } from './pipes/remove-prefix.pipe';
import { HomeComponent } from './components/home/home.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { PopularComponent } from './components/popular/popular.component';
import { OtherProfileComponent } from './components/other-profile/other-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFromIdPipe } from './pipes/user-from-id.pipe';
import { BookingDialogComponent } from './components/booking-dialog/booking-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    DashboardComponent,
    ArtistDetailsComponent,
    UserDetailsComponent,
    BookingDetailsComponent,
    VerifyOTPComponent,
    PaymentDetailsComponent,
    AdminLoginComponent,
    DialogComponent,
    RemovePrefixPipe,
    HomeComponent,
    DiscoverComponent,
    PopularComponent,
    OtherProfileComponent,
    UserFromIdPipe,
    BookingDialogComponent,
  ],
  // entryComponents:[DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    DataTablesModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    provideClientHydration(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
