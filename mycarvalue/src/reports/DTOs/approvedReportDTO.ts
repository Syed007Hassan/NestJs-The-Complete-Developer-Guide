import { IsBoolean } from 'class-validator';

export class ApprovedReportDTO {
  @IsBoolean()
  approved: boolean;
}
