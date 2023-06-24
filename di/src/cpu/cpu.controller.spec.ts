import { Test, TestingModule } from '@nestjs/testing';
import { CpuController } from './cpu.controller';

describe('CpuController', () => {
  let controller: CpuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CpuController],
    }).compile();

    controller = module.get<CpuController>(CpuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
