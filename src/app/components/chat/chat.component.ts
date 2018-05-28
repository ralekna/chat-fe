import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SocketService} from '../../services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers : [SocketService]
})
export class ChatComponent implements OnInit {

  @ViewChild('text') public textInput: ElementRef;

  public messages;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    // this.messages = this.socketService.getMessage();
    this.socketService.getMessage().subscribe((message) => {
      console.log('got message', message);
    })
  }

  protected handleFormSubmit(event: Event) {
    event.preventDefault();
    console.log('value', this.textInput.nativeElement.value);
    this.socketService.sendMessage(this.textInput.nativeElement.value);
  }

}
