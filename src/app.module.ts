import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtService, JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesGuard } from './users/roles.gaurd';
import { LoggerMiddleware } from './users/user.middleware';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'key',
    }),
  ],
  controllers: [AppController],
  providers: [AppService , {provide:APP_GUARD,useClass:RolesGuard}],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: '/users/token', method: RequestMethod.POST })
      .forRoutes(UsersController);
  }
}
