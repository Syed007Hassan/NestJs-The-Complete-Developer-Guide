import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { User } from './user.entity';

it('can create an instance of auth service', async () => {
  //create a fake copy of the users service

  const fakeUsersService: Partial<UsersService> = {
    findByEmail(email) {
      return Promise.resolve({ id: 1, email, password: 'password' } as User);
    },
    create: (email: string, password: string) => {
      return Promise.resolve({ id: 1, email, password } as User);
    },
  };

  const module = await Test.createTestingModule({
    providers: [
      AuthService,
      {
        provide: UsersService,
        useValue: fakeUsersService,
      },
    ],
  }).compile();

  const service = module.get(AuthService);
  const usersService = module.get(UsersService);

  expect(service).toBeDefined();
  expect(usersService).toBeDefined();
});
