import { Test, TestingModule } from '@nestjs/testing';
import { ComputerService } from './computer.service';

describe('ComputerService', () => {
  let service: ComputerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComputerService],
    }).compile();

    service = module.get<ComputerService>(ComputerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
