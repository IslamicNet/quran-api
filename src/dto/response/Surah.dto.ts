/**
 * @openapi
 * components:
 *  schemas:
 *      Surah:
 *          type: object
 *          properties:
 *              number:
 *                  type: number
 *                  description: Surah number in Quran
 *              name:
 *                  type: string
 *              arabic:
 *                  type: string
 *              englishName:
 *                  type: string
 */
class SurahDTO {
  number: number;
  name: string;
  arabic: string;
  englishName: string;
}

export default SurahDTO;
