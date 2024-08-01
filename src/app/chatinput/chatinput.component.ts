import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chatinput',
  templateUrl: './chatinput.component.html',
  styleUrls: ['./chatinput.component.scss']
})
export class ChatinputComponent {
  message: string = '';
  @Output() messageSent = new EventEmitter<{ text: string, time: Date, sender: boolean }>();


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
