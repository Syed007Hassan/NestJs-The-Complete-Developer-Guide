import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { createReportDTO } from './DTOs/createReportDTO';
import { ReportsService } from './reports.service';
import { AuthGuard } from 'src/guards/auth.guards';
import { CurrentUser } from 'src/users/decorators/current-user-decorator';
import { User } from 'src/users/user.entity';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ReportDto } from './DTOs/report.dto';

@Controller('reports')
@UseGuards(new AuthGuard())
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post()
  @Serialize(ReportDto)
  createReport(
    @Body() body: createReportDTO,
    @CurrentUser() currentUser: User,
  ) {
    return this.reportsService.create(body, currentUser);
  }
}
