import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgIoModule, NgIoConfig } from 'ng-io';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatFormFieldModule, MatTabsModule} from '@angular/material';

import {Nl2BrPipeModule} from 'nl2br-pipe';

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import {SocketService} from './services/socket.service';

const config: NgIoConfig = { url: 'http://localhost:5000/', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgIoModule.forRoot(config),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    Nl2BrPipeModule
  ],
  providers: [
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
