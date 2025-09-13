import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesController } from './articles.controller';

@Module({
  imports: [],
  controllers: [AppController, ArticlesController], // ← 一定要把 ArticlesController 加进来
  providers: [AppService],
})
export class AppModule {}
