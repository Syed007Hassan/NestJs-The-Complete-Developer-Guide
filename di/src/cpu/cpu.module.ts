import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { CpuController } from './cpu.controller';
import { PowerModule } from '../power/power.module';

@Module({
  //import PowerModule so that CpuService can use PowerService
  imports: [PowerModule],
  providers: [CpuService],
  controllers: [CpuController],
  exports: [CpuService],
})
export class CpuModule {}
