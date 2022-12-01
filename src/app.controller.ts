import { Controller, Get, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from "./user.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('get-user')
  getUser(
    @Request() request
  ) {
    return this.userService.getUser(request);
  }
}
