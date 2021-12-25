import { classToClass } from "class-transformer";
import { Service as AutoInjection } from "typedi";
import AyahDTO from "../dto/response/Ayah.dto";
import AyahRepo from "../repository/Ayah.repo";

interface IAyahService {
  getSurahAyahByPage(
    surahNumber: number,
    page?: number
  ): Promise<[AyahDTO[], number]>;
  getAyahPortion(
    surahNumber: number,
    from?: number,
    to?: number
  ): Promise<AyahDTO[]>;
  getAyahById(ayahId: string): Promise<AyahDTO>;
}

@AutoInjection()
class AyahService implements IAyahService {
  public constructor(private readonly ayahRepo: AyahRepo) {}

  /**
   * Get ayahs and total ayahs in surah
   * @param surahNumber
   * @param page
   * @returns Array [AyahDTO[], totalAyahs]
   */
  async getSurahAyahByPage(
    surahNumber: number,
    page: number = 1
  ): Promise<[AyahDTO[], number]> {
    const limit = 20;
    const from = (page - 1) * limit;

    const ayahList: AyahDTO[] = <AyahDTO[]>(
      classToClass(await this.ayahRepo.getSurahAyahs(surahNumber, from, limit))
    );
    const totalAyahs: number = await this.ayahRepo.countSurahAyahs(surahNumber);

    return [ayahList, totalAyahs];
  }

  /**
   * Get surah ayah portion
   * @param surahNumber
   * @param from
   * @param to
   * @returns
   */
  async getAyahPortion(
    surahNumber: number,
    from: number = 0,
    to: number = 20
  ): Promise<AyahDTO[]> {
    const ayahList: AyahDTO[] = <AyahDTO[]>(
      classToClass(await this.ayahRepo.getAyahPortion(surahNumber, from, to))
    );
    return ayahList;
  }

  /**
   * Get Ayah by id
   * @param ayahId
   * @returns
   */
  async getAyahById(ayahId: string): Promise<AyahDTO> {
    const ayah: AyahDTO = <AyahDTO>(
      classToClass(await this.ayahRepo.getAyahById(ayahId))
    );
    return ayah;
  }
}

export default AyahService;
