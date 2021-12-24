import { Request } from "express";
import { Service as AutoInjection } from "typedi";
import AyahDTO from "../dto/response/Ayah.dto";
import SurahDTO from "../dto/response/Surah.dto";
import AyahService from "../service/Ayah.service";
import SurahService from "../service/Surah.service";
import BaseController from "./Base.controller";

@AutoInjection()
class SurahController extends BaseController {
  public constructor(
    private readonly surahService: SurahService,
    private readonly ayahService: AyahService
  ) {
    super();
  }

  protected initializeEndpoints(): void {
    this.asyncEndpoint("GET", "/surahs/:surahNumber", this.getSurah);
    this.endpoint("GET", "/surahs", this.getSurahList);
  }

  private getSurah = async (req: Request) => {
    const surahNumber: number = parseInt(req.params.surahNumber);
    const page: number = parseInt(<string>req.query.page) || 1;

    const ayahList: AyahDTO[] = await this.ayahService.getSurahAyahByPage(
      surahNumber,
      page
    );

    const surah: SurahDTO = await this.surahService.getSurahBySurahNumber(
      surahNumber
    );

    return {
      ayahs: ayahList,
      surah: surah,
      nextPage: page + 1,
      prevPage: page - 1,
    };
  };

  /*
   * @openapi
   * /surahs:
   *   get:
   *     tags:
   *       - Surah
   *     summary: Get Surah List of Quran
   *     responses:
   *       200:
   *         description: Return list of Surahs
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Surah'
   */
  private getSurahList = () => {
    return this.surahService.getSurahList();
  };
}

export default SurahController;
