import { Service as AutoInjection } from "typedi";
import { MongoRepository } from "typeorm";
import Database from "../database";
import AyahEntity from "./entity/Ayah.entity";

interface IAyahRepo {
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
    return ayah;
  }
}

export default AyahRepo;
