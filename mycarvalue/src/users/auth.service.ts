import { Injectable } from '@nestjs/common/decorators';
import { UsersService } from './users.service';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string) {
    //see if email is in use

    const users = await this.usersService.findByEmail(email);

    if (!users) {
      throw new BadRequestException('Email already in use');
    }
  }
}
