import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Devices API')
    .setDescription(
      'New API created',
    )
    .setVersion('1.0')
    .addTag('devices')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-docs', app, document);

  await app.listen(3000);
}
bootstrap();
