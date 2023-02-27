import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { LISTEN_QUEUE, PORT, RABBITMQ_URL, SEND_QUEUE } from './config/main.config'

async function bootstrap() {
  console.log("Start ms with port ", PORT, " listenQueue ", LISTEN_QUEUE, " sendQueue ", SEND_QUEUE);
  
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [RABBITMQ_URL],
      queue: LISTEN_QUEUE,
      queueOptions: {
        durable: false
      }
    }
  });

  await app.startAllMicroservices();
  await app.listen(PORT);
}
bootstrap();
