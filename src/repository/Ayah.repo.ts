import { Service as AutoInjection } from "typedi";
import { MongoRepository } from "typeorm";
import Database from "../database";
import NotFound from "../error/NotFound.error";
import AyahEntity from "./entity/Ayah.entity";

interface IAyahRepo {
  countSurahAyahs(surahNumber: number): Promise<number>;
  getAyahPortion(
    surahNumber: number,
    from: number,
    to: number
  ): Promise<AyahEntity[]>;
  getSurahAyahs(
    surahNumber: number,
    from: number,
    limit: number
  ): Promise<AyahEntity[]>;
  getAyahById(ayahId: string): Promise<AyahEntity>;
}

@AutoInjection()
class AyahRepo implements IAyahRepo {
  private readonly repo: MongoRepository<AyahEntity>;

  public constructor() {
    this.repo = Database.getRepository(AyahEntity);
  }

  /**
   * Return total ayahs
   * @param surahNumber
   * @returns
   */
  async countSurahAyahs(surahNumber: number): Promise<number> {
    const totalAyahs: number = await this.repo.count({
      surahNumber: surahNumber,
    });
    return totalAyahs;
  }

  /**
   * Get Ayah Portion
   * @param surahNumber
   * @param from
   * @param to
   * @returns
   */
  async getAyahPortion(
    surahNumber: number,
    from: number,
    to: number
  ): Promise<AyahEntity[]> {
    const ayahList: AyahEntity[] = await this.repo.find({
      where: { surahNumber: surahNumber, number: { $gte: from, $lte: to } },
    });

    return ayahList;
  }

  /**
   * Get surah ayahs
   * @param surahNumber
   * @param from
   * @param limit
   * @returns
   */
  async getSurahAyahs(
    surahNumber: number,
    from: number,
    limit: number
  ): Promise<AyahEntity[]> {
    const ayahList: AyahEntity[] = await this.repo.find({
      where: { surahNumber: surahNumber },
      skip: from,
      take: limit,
    });

    return ayahList;
  }

  /**
   * Get ayah by ayah id
   * @param ayahId
   * @returns
   */
  async getAyahById(ayahId: string): Promise<AyahEntity> {
    const ayah: AyahEntity = await this.repo.findOne({ ayahId: ayahId });

    if (!ayah) throw new NotFound(`No Ayah found against id: ${ayahId}`);

    return ayah;
  }
}

export default AyahRepo;
