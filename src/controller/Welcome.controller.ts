import { Request } from "express";
import { Response } from "express-serve-static-core";
import { Service as InjectServices } from "typedi";
import MessageDTO from "../dto/request/message.dto";
import { WelcomeService } from "../service/Welcome.service";
import BaseController from "./Base.controller";

@InjectServices()
class WelcomeController extends BaseController {
  public constructor(private readonly welcomeService: WelcomeService) {
    super();
  }

  protected initializeEndpoints(): void {
    this.addEndpoint("GET", "/welcome", this.welcome);
    this.addEndpoint("GET", "/say", this.saySomething);
  }

  private welcome = (req: Request, res: Response) => {
    const message = this.welcomeService.hello();

    res.status(200).json(message);
  };

  private saySomething = (req: Request, res: Response) => {
    const body: MessageDTO = req.body;

    const message = this.welcomeService.saySomething(body);
    res.status(200).json(message);
  };
}

export default WelcomeController;
