import { plainToClass } from "class-transformer";
import { Request } from "express";
import { Service as AutoInjection } from "typedi";
import AyahIdDTO from "../dto/request/AyahId.dto";
import GetAyahPortionDTO from "../dto/request/GetAyahPortion.dto";
import AyahDTO from "../dto/response/Ayah.dto";
import SurahDTO from "../dto/response/Surah.dto";
import AyahService from "../service/Ayah.service";
import SurahService from "../service/Surah.service";
import BaseController from "./Base.controller";

@AutoInjection()
class AyahController extends BaseController {
  public constructor(
    private readonly surahService: SurahService,
    private readonly ayahService: AyahService
  ) {
    super();
  }

  protected initializeEndpoints(): void {
    this.asyncEndpoint(
      "GET",
      "/ayahs/portion",
      this.getAyahPortion,
      GetAyahPortionDTO
    );
    this.asyncEndpoint("GET", "/ayahs/:id", this.getAyahById, AyahIdDTO);
  }

  /**
   * @openapi
   * /ayahs/portion:
   *   get:
   *     tags:
   *       - Ayah
   *     summary: Get Surah List of Quran
   *     parameters:
   *       - name: surahNumber
   *         in: query
   *         required: true
   *         description: Surah number in Quran
   *         schema:
   *           type: number
   *       - name: from
   *         in: query
   *         required: true
   *         description: Start ayahs from
   *         schema:
   *           type: number
   *       - name: to
   *         in: query
   *         required: true
   *         description: End ayahs on
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
   */
  private getAyahPortion = async (req: Request) => {
    const ayahPortion: GetAyahPortionDTO = plainToClass(
      GetAyahPortionDTO,
      req.query
    );

    const ayahList: AyahDTO[] = await this.ayahService.getAyahPortion(
      ayahPortion.surahNumber,
      ayahPortion.from,
      ayahPortion.to
    );
    const surah: SurahDTO = this.surahService.getSurahBySurahNumber(
      ayahPortion.surahNumber
    );

    return { ayahs: ayahList, surah: surah };
  };

  /**
   * @openapi
   * /ayahs/{id}:
   *   get:
   *     tags:
   *       - Ayah
   *     summary: Get Ayah by id
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Ayah id combination of surah number and ayah number (1-1)
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Return Ayah
   *         content:
   *           application/json:
   *             schema:
   *                 $ref: '#/components/schemas/Ayah'
   */
  private getAyahById = async (req: Request) => {
    const params: AyahIdDTO = plainToClass(AyahIdDTO, req.params);
    const ayah: AyahDTO = await this.ayahService.getAyahById(params.id);
    return ayah;
  };
}

export default AyahController;
