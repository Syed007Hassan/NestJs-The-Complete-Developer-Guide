import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  //an instance of PowerService is injected into CpuService
  constructor(private powerService: PowerService) {}
}
