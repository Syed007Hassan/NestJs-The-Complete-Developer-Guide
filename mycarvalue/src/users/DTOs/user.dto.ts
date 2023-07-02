import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
export class UserDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  email: string;
}
