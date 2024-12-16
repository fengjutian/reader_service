import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Reader 文档') // 设置文档标题
    .setDescription('Your API description') // 设置文档描述
    .setVersion('1.0') // 设置文档版本
    .addTag('your-tag') // 添加文档标签
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document); // 设置Swagger文档的路由

  await app.listen(3000);
}
bootstrap();
