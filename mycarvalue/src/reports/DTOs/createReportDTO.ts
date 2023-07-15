import {
  IsEmail,
  IsLatLong,
  IsNumber,
  IsString,
  Max,
  Min,
  max,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class createReportDTO {
  @ApiProperty()
  @IsString()
  make: string;

  @ApiProperty()
  @IsString()
  model: string;

  @ApiProperty()
  @IsNumber()
  @Min(1930)
  @Max(2050)
  year: number;

  @ApiProperty()
  @IsNumber()
  @IsLatLong()
  lng: number;

  @ApiProperty()
  @IsNumber()
  @IsLatLong()
  lat: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(1000000)
  mileage: number;

  @ApiProperty()
  @IsNumber()
  price: number;
}
