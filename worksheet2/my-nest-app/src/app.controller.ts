cat > src/articles.controller.ts <<'EOF'
import { Controller, Get, Param } from '@nestjs/common';
import { ARTICLES, Article } from './dummydata/articles';

@Controller('api/articles')
export class ArticlesController {
  constructor() {
    // 自检：控制器是否真正被 Nest 加载
    console.log('✅ ArticlesController loaded');
  }

  @Get()
  getAll(): Article[] {
    return ARTICLES;
  }

  @Get(':id')
  getById(@Param('id') id: string): Article | undefined {
    return ARTICLES.find((a) => a._id === id);
  }
}
EOF
