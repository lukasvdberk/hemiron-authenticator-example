import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthenticationValidatorModule } from "hemiron-auth/dist/authentication-validator.module";
import { APP_GUARD } from "@nestjs/core";
import { AuthenticationValidationGuard } from "hemiron-auth/dist/guards/authentication-validation.guard";
import { AppService } from "./app.service";
import { TestModule } from "./test.module";
import { UserService } from "./user.service";

@Module({
  imports: [
    AuthenticationValidatorModule.setup({
      authenticationServerURL: 'http://auth.hemiron.com'
    }),
    TestModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    // apply the authentication guard to every route
    {
      provide: APP_GUARD,
      useClass: AuthenticationValidationGuard,
    },
    AppService,
    UserService
  ]
})
export class AppModule {}
