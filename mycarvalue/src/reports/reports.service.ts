import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './report.entity';
import { Repository } from 'typeorm';
import { createReportDTO } from './DTOs/createReportDTO';

@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Report) private repo: Repository<Report>) {}

  create(reportDto: createReportDTO) {
    const report = this.repo.save(reportDto);

    return report;
  }
}
