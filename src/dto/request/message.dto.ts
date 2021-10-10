import { IsNotEmpty } from "class-validator";

class MessageDTO {
  @IsNotEmpty()
  text: string;
}

export default MessageDTO;
