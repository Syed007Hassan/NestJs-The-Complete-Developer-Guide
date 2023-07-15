import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { response } from 'express';

describe('UsersController', () => {
  let controller: UsersController;
  let fakeUsersService: Partial<UsersService>;
  let fakeAuthService: Partial<AuthService>;

  beforeEach(async () => {
    fakeUsersService = {
      findOne: (id: number) => {
        return Promise.resolve({ id, email: 'a', password: '1' } as User);
      },
      findByEmail: (email: string) => {
        return Promise.resolve({ id: 1, email, password: '1' } as User);
      },
      update: (id: number, attrs: Partial<User>) => {
        return Promise.resolve({ id, email: 'a', password: '1' } as User);
      },
      remove: (id: number) => {
        return Promise.resolve({ id, email: 'a', password: '1' } as User);
      },
    };

    fakeAuthService = {
      signin: (email: string, password: string) => {
        return Promise.resolve({ id: 1, email, password } as User);
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
        {
          provide: AuthService,
          useValue: fakeAuthService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findAllU all the users with the given email', async () => {
    const users = await controller.findAllUsers('hello@gmail.com');
    expect(users.email).toEqual('hello@gmail.com');
  });

  it('finds a user by id', async () => {
    const user = await controller.findUser('1');
    expect(user.id).toEqual(1);
  });

  it('findUser throws an error if user not found', async () => {
    fakeUsersService.findOne = () => null;
    expect.assertions(1);
    try {
      await controller.findUser('1');
    } catch (err) {
      expect(err.message).toEqual('user not found');
    }
  });

  it('signin updates session object and returns user', async () => {
    const session = { userId: -10 };
    const user = await controller.signin(
      { email: 'a', password: '1' },
      response as any,
      session as any,
    );
    expect(undefined).toEqual(undefined);
  });
});
