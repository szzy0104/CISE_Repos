import { Controller, Get, Param } from '@nestjs/common';
import { ARTICLES, Article } from './dummydata/articles';

@Controller('api/articles')
export class ArticlesController {
  @Get()
  getAll(): Article[] {
    return ARTICLES;
  }

  @Get(':id')
  getById(@Param('id') id: string): Article | undefined {
    return ARTICLES.find((a) => a._id === id);
  }
}
