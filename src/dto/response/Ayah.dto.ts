/**
 * @openapi
 *   components:
 *     schemas:
 *       Ayah:
 *         type: object
 *         properties:
 *           id:
 *             type: string
 *           ayahId:
 *             type: string
 *           uci:
 *             type: string
 *           number:
 *             type: number
 *           surahNumber:
 *             type: number
 *           arabic:
 *             type: string
 *           translations:
 *             type: object
 *             properties:
 *               urdu:
 *                 type: string
 *               english:
 *                 type: string
 */
class Translations {
  urdu: string;
  english: string;
}

class AyahDTO {
  id: string;
  ayahId: string;
  uci: String;
  number: number;
  surahNumber: number;
  arabic: string;
  translations: Translations;
}

export default AyahDTO;
