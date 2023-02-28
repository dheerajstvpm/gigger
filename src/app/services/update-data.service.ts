import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UpdateDataService {

  private profileUrl="http://127.0.0.1:3000/api/profile"
  
  constructor(private http:HttpClient) { }

  updateProfile(user:User){
    return this.http.post<User>(this.profileUrl,user)
  }
}
