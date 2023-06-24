import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { CpuController } from './cpu.controller';

@Module({
  providers: [CpuService],
  controllers: [CpuController]
})
export class CpuModule {}
