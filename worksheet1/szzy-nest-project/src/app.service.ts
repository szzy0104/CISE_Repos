import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hi Shi Zhangzhuoyue,Welcome to AUT CISE Program!';
  }
}
