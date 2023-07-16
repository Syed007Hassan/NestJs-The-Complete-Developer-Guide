import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './report.entity';
import { Repository } from 'typeorm';
import { createReportDTO } from './DTOs/createReportDTO';
import { User } from 'src/users/user.entity';

@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Report) private repo: Repository<Report>) {}

  create(reportDto: createReportDTO, user: User) {
    const report = this.repo.create(reportDto);
    report.user = user; // this is how we associate a user with a report
    return this.repo.save(report);
  }
}
