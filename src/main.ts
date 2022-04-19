import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const documentConfig = new DocumentBuilder()
    .setTitle('Con Cruise')
    .setDescription('The con cruise API description')
    .setVersion('1.0')
    .addServer(config.get('app.SERVER'))
    .addTag('conCruise')
    .build();
  const document = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(config.get('app.PORT'), config.get('app.HOST'));
}
bootstrap();
