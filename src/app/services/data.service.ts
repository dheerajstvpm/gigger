import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Booking } from "../models/booking";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private bookingsUrl="http://localhost:3000/api/bookings"
  private requestsUrl="http://localhost:3000/api/requests"
  private profileUrl="http://localhost:3000/api/profile"
  
  constructor(private http:HttpClient) { }

  getBookings(){
    return this.http.get<Booking[]>(this.bookingsUrl)
  }
  getProfile(){
    return this.http.get<any>(this.profileUrl)
  }
}
