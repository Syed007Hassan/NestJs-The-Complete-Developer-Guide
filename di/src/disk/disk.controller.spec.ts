import { Test, TestingModule } from '@nestjs/testing';
import { DiskController } from './disk.controller';

describe('DiskController', () => {
  let controller: DiskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiskController],
    }).compile();

    controller = module.get<DiskController>(DiskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
