import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello from NestJS! 🚀 Agile is about Values and Principles';
  }
}
