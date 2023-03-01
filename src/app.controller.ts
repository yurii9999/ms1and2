import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ApiOkResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { MessageDto } from './new-message.dto';
import { Message } from './new-message.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @ApiOkResponse({ description: 'Response as plain string', type: String })
  postMessage(@Body() body: MessageDto) {
    this.appService.postMessage(body.message);
    return "Message sended";
  }

  @EventPattern('new_message')
  handleNewMessage(message: Message) {
    this.appService.handleNewMessage(message);
  }

  @Get()
  @ApiOkResponse({ description: 'Hello message of this microservice as plain text', type: String })
  getHelloMessage() {
    return this.appService.getHelloMessage();
  }
}
