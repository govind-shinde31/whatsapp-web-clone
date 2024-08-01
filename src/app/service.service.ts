import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/Models/users.model';
import { Message } from 'src/Models/messages.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
url = "http://localhost:8080/api/users"

private messagesSource = new BehaviorSubject<Message[]>([]);
currentMessages = this.messagesSource.asObservable();


  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }


  getMessages(userId: number): Observable<Message[]> {
    if (!userId) {
      throw new Error('User ID is required'); // Added check for debugging
    }
    return this.http.get<Message[]>(`${this.url}/${userId}/messages`);
  }
  

  changeMessages(messages: Message[]) {
    this.messagesSource.next(messages);
  }
}
