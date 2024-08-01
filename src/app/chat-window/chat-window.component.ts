import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from 'src/Models/messages.model';
import { ServiceService } from '../service.service';
import { User } from 'src/Models/users.model';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent {
  
  @Input() user:User | null = null;
  @Input() showChat!: boolean;
  @Output() showChatChange = new EventEmitter<boolean>();
  @Input() messages: Message[] = [];
  message: string = '';
  @Output() messageSent = new EventEmitter<{ text: string, time: Date, sender: boolean }>();


  constructor(private userService: ServiceService) { }

  ngOnInit(userId: number): void {
    this.userService.currentMessages.subscribe(
      (messages: Message[]) => {
        console.log('Messages updated:', messages); // Verify messages data
        this.messages = messages;
      },
      error => {
        console.error('Error updating messages:', error); // Handle error if any
      }
    );
  }
  sendMessage() {
    if (this.message.trim()) {
      this.messageSent.emit({
        text: this.message,
        time: new Date(),
        sender: true // Assuming messages sent from the input are always "sent" by the user
      });
      this.message = '';
    }
  }
}
