import { isBoolean } from 'class-validator';

export class ApprovedReportDTO {
  @isBoolean()
  approved: boolean;
}
