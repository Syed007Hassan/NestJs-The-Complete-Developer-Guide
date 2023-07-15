import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { createReportDTO } from './DTOs/createReportDTO';
import { ReportsService } from './reports.service';
import { AuthGuard } from 'src/guards/auth.guards';

@Controller('reports')
@UseGuards(new AuthGuard())
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post()
  createReport(@Body() body: createReportDTO) {
    return this.reportsService.create(body);
  }
}
