import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

it('can create an instance of auth service', async () => {
  //create a fake copy of the users service

  const fakeUsersService = {
    find: () => Promise.resolve([]),
    create: (email: string, password: string) => {
      return Promise.resolve({ id: 1, email, password });
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
