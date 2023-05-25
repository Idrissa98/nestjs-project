import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Guys';
  }

  getSomething(): string {
    return 'Something else!';
  }
}
