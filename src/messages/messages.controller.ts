import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ApiOkResponse } from '@nestjs/swagger';
import { MessagesService } from './messages.service';
import { MessageDto } from './new-message.dto';
import { Message } from './new-message.event';

@Controller()
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  @ApiOkResponse({ description: 'Response as plain string', type: String })
  postMessage(@Body() body: MessageDto) {
    this.messagesService.postMessage(body.message);
    return "Message sended";
  }

  @EventPattern('new_message')
  handleNewMessage(message: Message) {
    this.messagesService.handleNewMessage(message);
  }

  @Get()
  @ApiOkResponse({ description: 'Hello message of this microservice as plain text', type: String })
  getHelloMessage() {
    return this.messagesService.getHelloMessage();
  }
}
