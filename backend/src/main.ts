import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });

  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];

  app.use(
    cors({
      origin: allowedOrigins,
      methods: 'GET,POST',
      credentials: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000, process.env.HOST ?? '0.0.0.0');
}
bootstrap();
