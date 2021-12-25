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

  /**
   * @openapi
   * /surahs/{surahNumber}:
   *   get:
   *     tags:
   *       - Surah
   *     summary: Get Surah List of Quran
   *     parameters:
   *       - name: surahNumber
   *         in: path
   *         required: true
   *         description: Surah number in Quran
   *         schema:
   *           type: number
   *     responses:
   *       200:
   *         description: Return list of Surahs
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 ayahs:
   *                   type: array
   *                   items:
   *                     $ref: '#/components/schemas/Ayah'
   *                 surah:
   *                   $ref: '#/components/schemas/Surah'
   *                 nextPage:
   *                   type: number
   *                 prevPage:
   *                   type: number
   */
  private getSurah = async (req: Request) => {
    const surahNumber: number = parseInt(req.params.surahNumber);
    const page: number = parseInt(<string>req.query.page) || 1;

    const surah: SurahDTO =
      this.surahService.getSurahBySurahNumber(surahNumber);

    const [ayahList, totalAyahs]: [AyahDTO[], number] =
      await this.ayahService.getSurahAyahByPage(surahNumber, page);

    const limit = 20;
    const nextPage = page * limit < totalAyahs ? page + 1 : undefined;
    const prevPage = page > 1 ? page - 1 : undefined;

    return {
      ayahs: ayahList,
      surah: surah,
      nextPage: nextPage,
      prevPage: prevPage,
    };
  };

  /**
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
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Surah'
   */
  private getSurahList = () => {
    return this.surahService.getSurahList();
  };
}

export default SurahController;
