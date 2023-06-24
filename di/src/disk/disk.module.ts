import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { DiskController } from './disk.controller';

@Module({
  providers: [DiskService],
  controllers: [DiskController]
})
export class DiskModule {}
