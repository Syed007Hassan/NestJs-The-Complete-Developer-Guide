import { Module } from '@nestjs/common';
import { PowerService } from './power.service';
import { PowerController } from './power.controller';

@Module({
  providers: [PowerService],
  controllers: [PowerController],
  //export PowerService so that it can be used in other modules
  exports: [PowerService],
})
export class PowerModule {}
