import { Service as AutoInjection } from "typedi";
import SurahDTO from "../dto/response/Surah.dto";
import SurahListRepo from "../repository/SurahList.repo";

interface ISurahService {
  getSurahList(): SurahDTO[];
}

@AutoInjection()
class SurahService implements ISurahService {
  public constructor(private readonly surahListRepo: SurahListRepo) {}

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
