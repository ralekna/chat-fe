import { Injectable } from '@angular/core';
import {Socket} from 'ng-socket-io';

@Injectable()
export class SocketService {

  constructor(private socket: Socket) { }

  sendMessage(message: string, channel: string = "message"): void {
    this.socket.emit("message", message);
  }

  getMessage() {
    return this.socket
      .fromEvent("message")
      .map( data => data.msg );
  }
}
