import { Injectable } from '@nestjs/common/decorators';
import { UsersService } from './users.service';
import { BadRequestException } from '@nestjs/common';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string) {
    //see if email is in use

    const users = await this.usersService.findByEmail(email);

    if (users) {
      throw new BadRequestException('Email already in use');
    }

    const salt = randomBytes(8).toString('hex'); //generate salt
    const hash = (await scrypt(password, salt, 32)) as Buffer; //hash users password
    const result = salt + '.' + hash.toString('hex'); //store salt and hash together

    const user = await this.usersService.create(email, result); //create user

    return user;
  }

  async signin(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    const [salt, storedHash] = user.password.split('.'); //split salt and hash
    const hash = (await scrypt(password, salt, 32)) as Buffer; //hash users password
    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('Invalid credentials');
    }

    return user;
  }
}
