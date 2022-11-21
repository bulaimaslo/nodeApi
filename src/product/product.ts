import {
  IsString,
  IsNumber,
  IsOptional,
  MaxLength,
  IsNotEmpty,
  IsDate,
} from 'class-validator';

export class Product {
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsDate()
  updatedDate: Date;
}
