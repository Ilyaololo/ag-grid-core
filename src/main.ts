import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
    allowedHeaders: ['Origin', 'Content-Type', 'Accept'],
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS', 'UPDATE'],
    origin(origin, callback) {
      callback(null, true);
    },
  });

  await app.listen(process.env.PORT);
}

bootstrap();
