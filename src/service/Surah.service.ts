import { Service as AutoInjection } from "typedi";
import SurahDTO from "../dto/response/Surah.dto";
import SurahListRepo from "../repository/SurahList.repo";

interface ISurahService {
  getSurahBySurahNumber(surahNumber: number): SurahDTO;
  getSurahList(): SurahDTO[];
}

@AutoInjection()
class SurahService implements ISurahService {
  public constructor(private readonly surahListRepo: SurahListRepo) {}

  /**
   * Get surah by surah number
   * @param surahNumber
   * @returns
   */
  getSurahBySurahNumber(surahNumber: number): SurahDTO {
    const surah: SurahDTO = this.surahListRepo.getSurahByNumber(surahNumber);
    return surah;
  }

  /**
   * Get list of surahs
   * @returns List of SurahDTO
   */
  getSurahList(): SurahDTO[] {
    const surahLists: SurahDTO[] = this.surahListRepo.getSurahList();
    return surahLists;
  }
}

export default SurahService;
