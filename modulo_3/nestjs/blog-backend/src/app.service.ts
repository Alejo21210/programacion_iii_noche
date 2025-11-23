import { Injectable } from '@nestjs/common';
import { version } from 'os';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getMyNewEndpoint(): string {
    return 'Hello desde MyNewEndpoint!';
  }

  getHealth(): any {
    return {
      service: 'Blog backend API',
      version: '0.0.1',
    }
  }
}
