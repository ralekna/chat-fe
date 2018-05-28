import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    // const socket = SocketIO('http://0.0.0.0:5000');
    // socket.on('news', function (data) {
    //   console.log(data);
    //   socket.emit('my other event', { my: 'data' });
    // });
  }

}
