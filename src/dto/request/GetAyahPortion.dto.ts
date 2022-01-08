import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

class GetAyahPortionDTO {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  surahNumber: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  from: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  to: number;
}

export default GetAyahPortionDTO;
