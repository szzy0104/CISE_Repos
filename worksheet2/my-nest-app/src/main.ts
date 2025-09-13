import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'; // 直接加载 .env，不会再报红

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 读取 .env 中的 PORT，默认 4000
  const port = parseInt(process.env.PORT || '4000', 10);

  await app.listen(port);
  console.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap().catch((err) => {
  console.error('❌ Error starting server:', err);
});
