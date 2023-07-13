import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { User } from './user.entity';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    fakeUsersService = {
      findByEmail: (email: string) => {
        return Promise.resolve(undefined);
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

    service = module.get(AuthService);
  });

  it('can create an instance of auth service', async () => {
    expect(service).toBeDefined();
  });

  it('creates a new user with a salted and hashed password', async () => {
    const user = await service.signup('sasd@gmail.com', 'password');
    expect(user.password).not.toEqual('password');

    const [salt, hash] = user.password.split('.');

    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it('throws an error if user signs up with email that is in use', async () => {
    //overwrite the findByEmail method
    fakeUsersService.findByEmail = () =>
      Promise.resolve({ id: 1, email: 'a', password: '1' } as User);

    try {
      await service.signup('dsfdsfdsf@f.com', 'password');
    } catch (e) {
      expect(e).toBeDefined();
    }
  });

  it('throws if signin is called with an unused email', async () => {
    try {
      await service.signin('sdfdf', 'password');
    } catch (e) {
      expect(e).toBeDefined();
    }
  });
});
