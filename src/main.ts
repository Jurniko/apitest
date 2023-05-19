import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    //origin: [process.env.DOMAIN_FRONT],
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true, // Para que funcione type(()=>Date),
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  

  await app.listen(3000);
}
bootstrap();
