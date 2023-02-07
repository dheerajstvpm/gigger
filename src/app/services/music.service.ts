import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() {}

  private music = new BehaviorSubject({track:'',startTime:0, isPaused:false});
  music$ = this.music.asObservable();

  changeData(track: string,startTime:number,isPaused:boolean) {
    this.music.next({track:track,startTime:startTime,isPaused:isPaused})
  }
}
