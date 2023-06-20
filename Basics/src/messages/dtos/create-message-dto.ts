import { IsString } from 'class-validator';

// DTO: Data Transfer Object
// DTOs are used to define the shape of the data
//that will be sent over the network between the
//client and the server.
export class CreateMessageDto {
  @IsString()
  content: string;
}
