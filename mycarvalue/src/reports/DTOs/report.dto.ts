import { Expose, Transform } from 'class-transformer';
import { User } from 'src/users/user.entity';

export class ReportDto {
  @Expose()
  id: number;
  @Expose()
  price: number;
  @Expose()
  year: number;
  @Expose()
  lng: number;
  @Expose()
  lat: number;
  @Expose()
  mileage: number;
  @Expose()
  make: string;
  @Expose()
  model: string;
  @Expose()
  approved: boolean;

  @Expose()
  @Transform(({ obj }) => obj.user.id) // this is how we expose the user id
  userId: number;
}
