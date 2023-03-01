import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RABBITMQ_URL, SEND_QUEUE } from 'src/config/main.config';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'ANOTHER_MS',
      transport: Transport.RMQ,
      options: {
        urls: [RABBITMQ_URL],
        queue: SEND_QUEUE,
        queueOptions: {
          durable: false
        }
      }
    }
  ])],
  controllers: [MessagesController],
  providers: [MessagesService]
})
export class MessagesModule {}
