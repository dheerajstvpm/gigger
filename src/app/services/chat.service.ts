import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket = io(Environment.chatURL);
  constructor() {}

  joinRoom(data: any) {
    this.socket.emit('join', data);
  }

  newUserJoined() {
    let observable = new Observable<{
      sender: string;
      receiver: string;
      message: string;
    }>((observer) => {
      this.socket.on('userJoined', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  leaveRoom(data: any) {
    this.socket.emit('leave', data);
  }

  userLeft() {
    let observable = new Observable<{
      sender: string;
      receiver: string;
      message: string;
    }>((observer) => {
      this.socket.on('userLeft', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  sendMessage(data: any) {
    this.socket.emit('message', data);
  }

  messageReceived() {
    let observable = new Observable<{
      sender: string;
      receiver: string;
      message: string;
    }>((observer) => {
      this.socket.on('messageReceived', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}
