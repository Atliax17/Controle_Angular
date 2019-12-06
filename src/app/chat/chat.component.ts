import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ChatService } from 'src/app/shared/services/chat.service';
import { Message } from 'src/app/shared/models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  isConnected: boolean = false;
  userName: string;
  content: string;
  messages: Message[] = [];

  constructor(private chatService: ChatService, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (localStorage.getItem('connexion') === 'true') {
      this.isConnected = true
    } else {
      this.isConnected = false;
    }
  }

  login(): void {
    this.isConnected = true;
    this.userName === '' ? this.userName : 'No name';
    localStorage.setItem('pseudo', this.userName);
    localStorage.setItem('connexion', JSON.stringify(this.isConnected));
  }

  logOut(): void {
    this.isConnected = false;
    localStorage.removeItem('pseudo');
  }

  sendMessages(): void {
    this.chatService.sendMessage({
      content: this.content,
      author: localStorage.getItem('pseudo'),
    }).subscribe(
      (message: Message) => {
        this.messages.push(message)
      })
      this.content = '';
  }

}
