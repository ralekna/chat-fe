import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
import { SocketIo } from 'ng-io';
// import {map} from 'rxjs/operators';
import {map} from 'rxjs/operators';

@Injectable()
export class SocketService {

  constructor(private socket: SocketIo) { }

  sendMessage(message: string, channel: string = "message"): void {
    this.socket.emit(channel, message);
  }

  getMessage() {
    return this.socket
      .fromEvent<{message: string; details: string}>("message")
      .pipe(
        map( data => data.message )
      )
  }
}
