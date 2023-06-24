import { Module } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { ComputerController } from './computer.controller';

@Module({
  providers: [ComputerService],
  controllers: [ComputerController]
})
export class ComputerModule {}
