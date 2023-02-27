import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RABBITMQ_URL, SEND_QUEUE } from './config/main.config'

@Module({
  imports: [
    ClientsModule.register([
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
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
