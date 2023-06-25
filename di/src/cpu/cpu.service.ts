import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  //an instance of PowerService is injected into CpuService
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log('Drawing 10 watts of power from PowerService');
    this.powerService.supplyPower(10);
    return a + b;
  }
}
