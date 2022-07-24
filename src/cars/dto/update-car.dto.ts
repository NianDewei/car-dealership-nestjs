import { CreateCarDto } from './create-car.dto';
import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsUUID } from 'class-validator';

export class UpdateCarDto extends PartialType(CreateCarDto) {
  @IsUUID()
  @IsOptional()
  id?: string;
}
