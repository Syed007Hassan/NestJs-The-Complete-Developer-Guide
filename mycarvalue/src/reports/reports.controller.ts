import {
  Body,
  Controller,
  Post,
  UseGuards,
  Patch,
  Param,
  Get,
  Query,
} from '@nestjs/common';
import { createReportDTO } from './DTOs/createReportDTO';
import { ReportsService } from './reports.service';
import { AuthGuard } from 'src/guards/auth.guards';
import { CurrentUser } from 'src/users/decorators/current-user-decorator';
import { User } from 'src/users/user.entity';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ReportDto } from './DTOs/report.dto';
import { ApprovedReportDTO } from './DTOs/approvedReportDTO';
import { AdminGuard } from 'src/guards/admin.guard';
import { GetEstimateDTO } from './DTOs/get-estimateDTO';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Reports')
@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post()
  @UseGuards(new AuthGuard())
  @Serialize(ReportDto)
  createReport(
    @Body() body: createReportDTO,
    @CurrentUser() currentUser: User,
  ) {
    return this.reportsService.create(body, currentUser);
  }

  @Patch('/:id')
  @UseGuards(new AdminGuard())
  approvedReport(@Param('id') id: string, @Body() body: ApprovedReportDTO) {
    return this.reportsService.changeApproval(id, body.approved);
  }

  @Get('/estimates')
  getEstimate(@Query() query: GetEstimateDTO) {
    return this.reportsService.createEstimate(query);
  }
}
