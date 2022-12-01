import { Injectable, Module, Request } from "@nestjs/common";
import { AuthenticationService } from "hemiron-auth/dist/services/authentication.service";

@Injectable()
export class UserService {
  constructor(
    private readonly authenticationService: AuthenticationService
  ) {}

  async getUser(request: Request) {
    const user = await this.authenticationService.getUserFromRequest(request);
    return user;
  }
}