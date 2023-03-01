import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { HELLO_MESSAGE } from '../config/main.config';
import { Message } from './new-message.event';

@Injectable()
export class MessagesService {
  getHelloMessage() {
    return HELLO_MESSAGE;
  }
  constructor(
    @Inject('ANOTHER_MS') private readonly ms1Client: ClientProxy
  ) {}
  
  handleNewMessage(message: Message): void {
    console.log(HELLO_MESSAGE, " ", message.message)
  }

  postMessage(message: string): void {
    this.ms1Client.emit('new_message', new Message(message));
  }
}
