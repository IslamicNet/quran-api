import { Service as InjectableService } from "typedi";
import MessageDTO from "../dto/request/message.dto";
import WelcomeDTO from "../dto/response/Welcome.dto";

export interface IWelcomeService {
  hello(): WelcomeDTO;
  saySomething(message: MessageDTO): WelcomeDTO;
}

@InjectableService()
export class WelcomeService implements IWelcomeService {
  hello(): WelcomeDTO {
    const welcome: WelcomeDTO = new WelcomeDTO();
    welcome.message = "Hello world!";

    return welcome;
  }

  saySomething(message: MessageDTO): WelcomeDTO {
    const welcome: WelcomeDTO = new WelcomeDTO();
    welcome.message = message.text;

    return welcome;
  }
}
