import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { User } from "./user.entity";
import { Role } from "./roles.enum";
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const requireRoles = this.reflector.getAllAndOverride<Role[]>("roles", [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requireRoles) {
      return true;
    }
    //const {user}=context.switchToHttp().getRequest();
    const user: User = {
      name: "aa",
      roles: [Role.USER],
    };
    return requireRoles.some((role) => user.roles.includes(role));
  }
}
