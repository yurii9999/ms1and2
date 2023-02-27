import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Message } from './new-message.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  postMessage(@Body('message') message: string) {
    this.appService.postMessage(message);
    return "Message sended";
  }

  @EventPattern('new_message')
  handleNewMessage(message: Message) {
    this.appService.handleNewMessage(message);
  }  

  @Get()
  getHelloMessage() {
    return this.appService.getHelloMessage();
  }
}
