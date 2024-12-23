import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Books } from './books/entities/book.entity';
import { AuthorModule } from './author/author.module';
import { Author } from './author/entities/author.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', //数据库类型
      username: 'root', // 账号
      password: 'fengjutian', // 密码
      host: '127.0.0.1', //host
      port: 3306,
      database: 'reader', //库名
      // entities: [__dirname + '/**/*.entity{.ts,.js}'], //实体文件
      entities: [Books, Author],
      synchronize: true, //synchronize字段代表是否自动将实体类同步到数据库
      retryDelay: 500, //重试连接数据库间隔
      retryAttempts: 10, //重试连接数据库的次数
      // autoLoadEntities: true, //如果为true,将自动加载实体 forFeature()方法注册的每个实体都将自动添加到配置对象的实体数组中
      logging: true,
    }),
    BooksModule,
    AuthorModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
