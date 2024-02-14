import { Component, Inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MusicService } from './services/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    public auth: AuthService,
    public service: MusicService,
  ) {}
  title = 'gigger';
  track = '';
  startTime: number = 0;
  isPaused: Boolean = false;
  player!: HTMLMediaElement;
  //audioTag:any

  playTrack(player: HTMLMediaElement) {
    player.play();
    this.isPaused = player.paused;
  }

  pauseTrack(player: HTMLMediaElement) {
    player.pause();
    this.isPaused = player.paused;
  }

  ngOnInit() {
    this.service.music$.subscribe((res) => {
      this.track = res.track;
      this.startTime = res.startTime;
      this.isPaused = res.isPaused;
    }); //read the invoked data or default data
  }
}
