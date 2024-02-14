import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Favourite } from '../models/favourite';
import { Environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private usersUrl = Environment.backendURL + '/users';
  private profileUrl = Environment.backendURL + '/profile';
  private favouritesUrl = Environment.backendURL + '/favourites';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.usersUrl);
  }
  getProfile() {
    return this.http.get<User>(this.profileUrl);
  }
  getFavourites() {
    return this.http.get<Favourite[]>(this.favouritesUrl);
  }
}
