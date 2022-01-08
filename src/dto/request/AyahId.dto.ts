import { IsNotEmpty, IsString } from "class-validator";
import { InParams } from "../../utils/Decorators";

class AyahIdDTO {
  @InParams()
  @IsNotEmpty()
  @IsString()
  id: string;
}

export default AyahIdDTO;
