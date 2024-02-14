import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateDataService {

  private profileUrl=Environment.backendURL+"/profile"

  constructor(private http:HttpClient) { }

  updateProfile(user:User){
    return this.http.post<User>(this.profileUrl,user)
  }
}
