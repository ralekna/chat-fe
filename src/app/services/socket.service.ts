import { Injectable } from '@angular/core';
import { SocketIo } from 'ng-io';
import {map} from 'rxjs/operators';
import {merge} from 'rxjs';
import Message, {MessageType} from '../models/message.model';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class SocketService {

  constructor(private socket: SocketIo) { }

  sendMessage(message: Message): void {
    this.socket.emit(message.type, message);
  }

  getMessage(): Observable<Message> {
    return merge(
      this.socket
        .fromEvent<Message>(MessageType.MESSAGE)
        .pipe(
          map( message => {
            message.type = MessageType.MESSAGE;
            return message;
          })
        ),
      this.socket
        .fromEvent<Message>(MessageType.NOTIFICATION)
        .pipe(
          map( message => {
            message.type = MessageType.NOTIFICATION;
            return message;
          })
        ),
      this.socket
        .fromEvent<Message>(MessageType.JOIN)
        .pipe(
          map( message => {
            console.log(message);
            message.type = MessageType.JOIN;
            return message;
          })
        )
    );
  }
}
