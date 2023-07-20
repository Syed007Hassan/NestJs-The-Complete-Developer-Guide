import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './report.entity';
import { Repository } from 'typeorm';
import { createReportDTO } from './DTOs/createReportDTO';
import { User } from 'src/users/user.entity';
import { GetEstimateDTO } from './DTOs/get-estimateDTO';

@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Report) private repo: Repository<Report>) {}

  create(reportDto: createReportDTO, user: User) {
    const report = this.repo.create(reportDto);
    report.user = user; // this is how we associate a user with a report
    return this.repo.save(report);
  }
  async changeApproval(id: string, approved: boolean) {
    const _id = parseInt(id);
    const report = await this.repo.findOne({ where: { id: _id } });

    if (!report) {
      throw new Error('report not found');
    }

    report.approved = approved;
    return this.repo.save(report);
  }

  createEstimate(estimateDto: GetEstimateDTO) {
    return this.repo
      .createQueryBuilder()
      .select('AVG(price)', 'price')
      .where('make = :make', { make: estimateDto.make })
      .andWhere('model = :model', { model: estimateDto.model })
      .andWhere('lng - :lng BETWEEN -5 AND 5', { lng: estimateDto.lng })
      .andWhere('lat - :lat BETWEEN -5 AND 5', { lat: estimateDto.lat })
      .andWhere('year - :year BETWEEN -3 AND 3', { year: estimateDto.year })
      .getRawOne();
  }
}
