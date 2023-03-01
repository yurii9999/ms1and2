import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { CONFIG, LISTEN_QUEUE, PORT, RABBITMQ_URL, SEND_QUEUE } from './config/main.config'

async function bootstrap() {
  console.log("Start ms with port ", PORT, " listenQueue ", LISTEN_QUEUE, " sendQueue ", SEND_QUEUE, "\tConfig file: ", CONFIG);
  
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

  const config = new DocumentBuilder()
    .setTitle('Http & rmq example')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.startAllMicroservices();
  await app.listen(PORT);
}
bootstrap();
