import { AuthenticationValidatorModule } from "hemiron-auth/dist/authentication-validator.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    AuthenticationValidatorModule.setup({
      authenticationServerURL: 'http://auth.hemiron.com'
    })
  ]
})
export class TestModule {}
