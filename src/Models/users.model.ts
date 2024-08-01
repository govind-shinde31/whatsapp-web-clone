import { Message } from "./messages.model";

export interface User {
    id: number;
    name: string;
    avatar: string; 
    messages: Message[];
  }