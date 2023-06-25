import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { DiskController } from './disk.controller';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports: [PowerModule],
  providers: [DiskService],
  controllers: [DiskController],
  exports: [DiskService],
})
export class DiskModule {}
