import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SocketService} from '../../services/socket.service';
import { MatInput } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers : [SocketService]
})
export class ChatComponent implements OnInit {

  @ViewChild('text') public textInput: MatInput;

  public messages: string[] = [];

  public currentMessage: string = "";

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    // this.messages = this.socketService.getMessage();
    this.socketService.getMessage().subscribe((message) => {
      this.messages.push(message);
      console.log('got message', message);
    })
  }

  protected handleFormSubmit(form: NgForm) {
    console.log('value', form.value.text);
    this.socketService.sendMessage(form.value.text);
    this.messages.push(form.value.text);
    this.currentMessage = "";
  }

  protected clearHistory() {
    this.messages = [];
  }
}
