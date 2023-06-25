import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';

@Module({
  controllers: [ReportsController],
  providers: [ReportsService]
})
export class ReportsModule {}
