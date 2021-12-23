import { Request } from "express";
import { Service as AutoInjection } from "typedi";
import BaseController from "./Base.controller";

@AutoInjection()
class AyahController extends BaseController {
  protected initializeEndpoints(): void {
    this.endpoint("GET", "/ayahs/:id", this.getAyahById);
  }

  private getAyahById = (req: Request) => {
    const ayahId = req.params.id;
  };
}

export default AyahController;
