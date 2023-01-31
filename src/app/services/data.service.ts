import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private usersUrl="http://localhost:3000/api/users"
  private profileUrl="http://localhost:3000/api/profile"
  
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.usersUrl)
  }
  getProfile(){
    return this.http.get<User>(this.profileUrl)
  }
}
