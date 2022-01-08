import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { InParams } from "../../utils/Decorators";

class GetSuarhAyahsDTO {
  @InParams()
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  surahNumber: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page?: number = 1;
}

export default GetSuarhAyahsDTO;
