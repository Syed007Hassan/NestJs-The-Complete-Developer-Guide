import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class ApprovedReportDTO {
  @ApiProperty()
  @IsBoolean()
  approved: boolean;
}
