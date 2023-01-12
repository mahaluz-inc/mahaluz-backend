import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
require("dotenv").config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('luzit-backend')
    .setDescription('The luzit API swagger')
    .setVersion('1.0')
    .addTag('general')
    .addSecurity(
      'Authorization', 
      {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header'
      }
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(80);
}
bootstrap();
