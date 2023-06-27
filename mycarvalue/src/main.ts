import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Car example')
    .setDescription('My Car API')
    .setVersion('1.0')
    .addTag('cars')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    // This will transform the incoming JSON payload into a Report object
    new ValidationPipe({
      whitelist: true, // This will remove any properties that don't have a matching property in the DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
