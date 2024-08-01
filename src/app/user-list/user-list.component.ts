import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceService} from '../service.service';
import { User } from 'src/Models/users.model';
import { Message } from 'src/Models/messages.model';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  user = faUser;
  users: User[] = [];
  showChat = false;
  @Output() userSelected = new EventEmitter<{ user: User, messages: Message[] }>();


  constructor(private userService:ServiceService){}
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(data)
    });
  }

  selectUser(user: User): void {
    console.log('Selected userId:', user.id);
    this.userService.getMessages(user.id).subscribe((messages: Message[]) => {
      console.log('Messages fetched:', messages); 
      this.userService.changeMessages(messages);
      this.userSelected.emit({ user, messages });
    });
  }
}
