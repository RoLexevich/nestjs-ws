import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';
import {BookCommentsModule} from './book-comments/book-comments.module';
import { AppGateway } from './app.gateway';
import "dotenv/config";


@Module({
  imports: [MongooseModule.forRoot(`${process.env.MONGODB_CONNECTION_STRING}`), BookModule, AuthModule, BookCommentsModule],
  controllers: [AppController ],
  providers: [AppService, AppGateway],
})
export class AppModule {}
