import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('unzip')
  unzip(): string[] {
    const directory = '<full path here>';
    return this.appService.unzip(directory);
  }
}
