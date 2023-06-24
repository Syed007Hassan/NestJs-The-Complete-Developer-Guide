import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(wats: number) {
    return `Supplying ${wats} watts of power.`;
  }
}
