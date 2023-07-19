import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const logger = new Logger();

  const app = await NestFactory.create(AppModule);

  // Log each request
  app.use((req, res, next) => {
    logger.log(`Request ${req.method} ${req.originalUrl}`);
    next();
  });

  (app as any).set('etag', false);

  app.use((req, res, next) => {
    res.removeHeader('x-powered-by');
    res.removeHeader('date');
    next();
  });

  const config = new DocumentBuilder()
    .setTitle('Car example')
    .setDescription('The Car API description')
    .setVersion('1.0')
    .addTag('Cars')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // app.use(cookieParser());

  // app.use(cookieSession({ keys: ['mysecret'] }));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3000);

  logger.log(`Application listening on port 3000`);
}
bootstrap();
