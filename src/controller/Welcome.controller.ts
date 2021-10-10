import { Request } from "express";
import { Response } from "express-serve-static-core";
import { Service as AutoInjection } from "typedi";
import MessageDTO from "../dto/request/Message.dto";
import validateRequest from "../middleware/requestValidator.middleware";
import { WelcomeService } from "../service/Welcome.service";
import BaseController from "./Base.controller";

@AutoInjection()
class WelcomeController extends BaseController {
  public constructor(private readonly welcomeService: WelcomeService) {
    super();
  }

  protected initializeEndpoints(): void {
    this.addEndpoint("GET", "/welcome", this.welcome);
    this.addEndpoint(
      "GET",
      "/say",
      this.saySomething,
      validateRequest(MessageDTO)
    );
    this.addEndpoint("GET", "/hello-from-repo", this.helloFromRepo);
  }

  private helloFromRepo = (req: Request, res: Response) => {
    const message = this.welcomeService.helloFromRepo();

    return message;
  };

  private welcome = (req: Request, res: Response) => {
    const message = this.welcomeService.hello();

    return message;
  };

  private saySomething = (req: Request, res: Response) => {
    const body: MessageDTO = req.body;

    const message = this.welcomeService.saySomething(body);
    return message;
  };
}

export default WelcomeController;
