import { CanActivate, ExecutionContext } from '@nestjs/common';
import { CurrentUser } from '../users/decorators/current-user-decorator';

export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    if (!request.currentUser || !request.currentUser.isAdmin) {
      return false;
    }

    return true;
  }
}
