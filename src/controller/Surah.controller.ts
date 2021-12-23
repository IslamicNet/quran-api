import { Service as AutoInjection } from "typedi";
import SurahService from "../service/SurahService.service";
import BaseController from "./Base.controller";

@AutoInjection()
class SurahController extends BaseController {
  public constructor(private readonly surahService: SurahService) {
    super();
  }

  protected initializeEndpoints(): void {
    this.endpoint("GET", "/surahs", this.getSurahList);
  }

  /**
   * @openapi
   * /surahs:
   *    get:
   *        tags:
   *            - Surah
   *        summary: Get Surah List of Quran
   *        responses:
   *            200:
   *                description: Return list of Surahs
   *                content:
   *                    application/json:
   *                        schema:
   *                            $ref: '#/components/schemas/Surah'
   */
  private getSurahList = () => {
    return this.surahService.getSurahList();
  };
}

export default SurahController;
