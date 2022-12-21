import { Module, RequestMethod } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { JwtModule } from "@nestjs/jwt";
import { NestModule, MiddlewareConsumer } from "@nestjs/common";
import { LoggerMiddleware } from "./user.middleware";
import { databaseProviders } from "./data.provider";
import { CatsService } from "./data.services";
import { catsProviders } from "./cat.provider";
@Module({
  imports: [
    JwtModule.register({
      secret: "key",
    }),
    
  ],
  controllers: [UsersController],
  providers: [UsersService, ...databaseProviders, ...catsProviders, CatsService],
})
export class UsersModule {}
