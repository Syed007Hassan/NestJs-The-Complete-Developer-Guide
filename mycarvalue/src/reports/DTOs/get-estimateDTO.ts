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
import { Transform } from 'class-transformer';

export class GetEstimateDTO {
  @ApiProperty()
  @IsString()
  make: string;

  @ApiProperty()
  @IsString()
  model: string;

  @Transform(({ value }) => parseInt(value))
  @ApiProperty()
  @IsNumber()
  @Min(1930)
  @Max(2050)
  year: number;

  @Transform(({ value }) => parseInt(value))
  @ApiProperty()
  @IsNumber()
  lng: number;

  @Transform(({ value }) => parseInt(value))
  @ApiProperty()
  @IsNumber()
  lat: number;

  @Transform(({ value }) => parseInt(value))
  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(1000000)
  mileage: number;

  // @ApiProperty()
  // @IsNumber()
  // price: number;
}
