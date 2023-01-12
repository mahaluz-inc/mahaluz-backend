import { Controller, Get, Redirect } from '@nestjs/common';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiTags("general")
  @ApiExcludeEndpoint()
  @Redirect('/swagger', 302)
  getHello(): string {
    return this.appService.getHello();
  }
}
