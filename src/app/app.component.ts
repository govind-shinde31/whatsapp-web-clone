import { Component } from '@angular/core';
import { Message } from 'src/Models/messages.model';
import { User } from 'src/Models/users.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'whatsApp-clone';

  selectedUser: User | null = null;
  showChat: boolean = false;
  messages: Message[] = [];

  onUserSelected(event: { user: User, messages: Message[] }): void {
    this.showChat = true;
    this.messages = event.messages; 
    this.selectedUser = event.user;
  }
}









