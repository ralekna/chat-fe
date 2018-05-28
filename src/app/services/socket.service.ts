import { Injectable } from '@angular/core';
import {Socket} from 'ng-socket-io';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class SocketService {

  constructor(private socket: Socket) { }

  sendMessage(message: string, channel: string = "message"): void {
    this.socket.emit(channel, message);
  }

  getMessage(): Observable<string> {
    return this.socket
      .fromEvent<{message: string; details: string}>("message")
      .map( data => data.message );
  }
}
