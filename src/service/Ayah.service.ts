import { classToClass } from "class-transformer";
import { Service as AutoInjection } from "typedi";
import AyahDTO from "../dto/response/Ayah.dto";
import AyahRepo from "../repository/Ayah.repo";

interface IAyahService {
  getSurahAyahByPage(surahNumber: number, page?: number): Promise<AyahDTO[]>;
  getSurahAyahs(
    surahNumber: number,
    from?: number,
    limit?: number
  ): Promise<AyahDTO[]>;
  getAyahById(ayahId: string): Promise<AyahDTO>;
}

@AutoInjection()
class AyahService implements IAyahService {
  public constructor(private readonly ayahRepo: AyahRepo) {}

  /**
   * Get surah ayah by page number
   * @param surahNumber
   * @param page
   * @returns
   */
  async getSurahAyahByPage(
    surahNumber: number,
    page: number = 1
  ): Promise<AyahDTO[]> {
    const limit = 20;
    const from = (page - 1) * limit;

    const ayahList: AyahDTO[] = <AyahDTO[]>(
      classToClass(await this.ayahRepo.getSurahAyahs(surahNumber, from, limit))
    );
    return ayahList;
  }

  /**
   * Get surah ayah portion
   * @param surahNumber
   * @param from
   * @param limit
   * @returns
   */
  async getSurahAyahs(
    surahNumber: number,
    from: number = 0,
    limit: number = 20
  ): Promise<AyahDTO[]> {
    const ayahList: AyahDTO[] = <AyahDTO[]>(
      classToClass(await this.ayahRepo.getSurahAyahs(surahNumber, from, limit))
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
