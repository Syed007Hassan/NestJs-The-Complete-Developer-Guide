import { Test, TestingModule } from '@nestjs/testing';
import { PowerController } from './power.controller';

describe('PowerController', () => {
  let controller: PowerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PowerController],
    }).compile();

    controller = module.get<PowerController>(PowerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
