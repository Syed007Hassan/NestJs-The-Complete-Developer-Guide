import { CpuService } from './../cpu/cpu.service';
import { Controller, Get } from '@nestjs/common';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get()
  run() {
    const cpu = this.cpuService.compute(8, 8);
    const disk = this.diskService.getData();
    return [cpu, disk];
  }
}
