import { Injectable } from '@nestjs/common/decorators';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
}
