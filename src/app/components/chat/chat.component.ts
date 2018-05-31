import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SocketService} from '../../services/socket.service';
import { MatInput } from '@angular/material';
import { NgForm } from '@angular/forms';
import Message, {MessageType} from '../../models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers : [SocketService]
})
export class ChatComponent implements OnInit {

  @ViewChild('text') public textInput: MatInput;

  public messages: Message[] = [];

  public rooms: string[] = [];

  public currentMessage = "";

  public currentRoom = "";

  public currentNickname = "guest";

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.getMessage().subscribe((message) => {
      message.htmlText = message.text.replace(/\n/g, "<br>");
      this.messages.push(message);
      if (message.type === MessageType.JOIN) {
        const roomName = message.room as string;
        this.currentRoom = roomName;
        this.rooms.push(roomName);
        if (message.data && message.data.user) {
          this.currentNickname = message.data.user as string;
        }
      }
      if (message.type === MessageType.NICK) {
        this.currentNickname = message.data.user as string;
      }
      console.log('got message', message);
    });
  }

  protected handleFormSubmit(form: NgForm) {
    const message = new Message(form.value.text, this.currentRoom, this.currentNickname);
    this.socketService.sendMessage(message);
    this.messages.push(message);
    this.currentMessage = "";
  }

  protected getRoomMessages(room: string) {
    return this.messages.filter(message => message.room === room);
  }

  protected clearHistory() {
    this.messages = [];
  }
}
