import { Service as AutoInjection } from "typedi";

interface ISurahListRepo {
  getSurahByNumber(surahNumber: number): any;
  getSurahList(): any[];
}

@AutoInjection()
class SurahListRepo implements ISurahListRepo {
  /**
   * Get surah by surah number
   * @param surahNumber
   * @returns
   */
  getSurahByNumber(surahNumber: number) {
    return surahList.find((s) => s.number == surahNumber);
  }

  /**
   * Get surah list
   * @returns
   */
  getSurahList(): any[] {
    return surahList;
  }
}

const surahList = [
  {
    number: 1,
    name: "Al-Fatiha",
    arabic: "ٱلْفَاتِحَة",
    englishName: "The Opener",
  },
  {
    number: 2,
    name: "Al-Baqarah",
    arabic: "ٱلْبَقَرَة",
    englishName: "The Cow",
  },
  {
    number: 3,
    name: "Al Imran",
    arabic: "آلِ عِمْرَان",
    englishName: "Family of Imran",
  },
  {
    number: 4,
    name: "An-Nisa",
    arabic: "ٱلنِّسَاء",
    englishName: "The Women",
  },
  {
    number: 5,
    name: "Al-Ma'idah",
    arabic: "ٱلْمَائِدَة",
    englishName: "The Table Spread",
  },
  {
    number: 6,
    name: "Al-An'am",
    arabic: "ٱلْأَنْعَام",
    englishName: "The Cattle",
  },
  {
    number: 7,
    name: "Al-A'raf",
    arabic: "ٱلْأَعْرَاف",
    englishName: "The Heights",
  },
  {
    number: 8,
    name: "Al-Anfal",
    arabic: "ٱلْأَنْفَال",
    englishName: "The Spoils of War",
  },
  {
    number: 9,
    name: "At-Tawbah",
    arabic: "ٱلتَّوْبَة",
    englishName: "The Repentance",
  },
  { number: 10, name: "Yunus", arabic: "يُونُس", englishName: "Jonah" },
  { number: 11, name: "Hud", arabic: "هُود", englishName: "Hud" },
  { number: 12, name: "Yusuf", arabic: "يُوسُف", englishName: "Joseph" },
  {
    number: 13,
    name: "Ar-Ra'd",
    arabic: "ٱلرَّعْد",
    englishName: "The Thunder",
  },
  {
    number: 14,
    name: "Ibrahim",
    arabic: "إِبْرَاهِيم",
    englishName: "Abraham",
  },
  {
    number: 15,
    name: "Al-Hijr",
    arabic: "ٱلْحِجْر",
    englishName: "The Rocky Tract",
  },
  { number: 16, name: "An-Nahl", arabic: "ٱلنَّحْل", englishName: "The Bee" },
  {
    number: 17,
    name: "Al-Isra",
    arabic: "ٱلْإِسْرَاء",
    englishName: "The Night Journey",
  },
  {
    number: 18,
    name: "Al-Kahf",
    arabic: "ٱلْكَهْف",
    englishName: "The Cave",
  },
  { number: 19, name: "Maryam", arabic: "مَرْيَم", englishName: "Mary" },
  { number: 20, name: "Ta-Ha", arabic: "طه", englishName: "Ta-Ha" },
  {
    number: 21,
    name: "Al-Anbiya",
    arabic: "ٱلْأَنْبِيَاء",
    englishName: "The Prophets",
  },
  {
    number: 22,
    name: "Al-Hajj",
    arabic: "ٱلْحَجّ",
    englishName: "The Pilgrimage",
  },
  {
    number: 23,
    name: "Al-Mu'minun",
    arabic: "ٱلْمُؤْمِنُون",
    englishName: "The Believers",
  },
  { number: 24, name: "An-Nur", arabic: "ٱلنُّور", englishName: "The Light" },
  {
    number: 25,
    name: "Al-Furqan",
    arabic: "ٱلْفُرْقَان",
    englishName: "The Criterion",
  },
  {
    number: 26,
    name: "Ash-Shu'ara",
    arabic: "ٱلشُّعَرَاء",
    englishName: "The Poets",
  },
  { number: 27, name: "An-Naml", arabic: "ٱلنَّمْل", englishName: "The Ant" },
  {
    number: 28,
    name: "Al-Qasas",
    arabic: "ٱلْقَصَص",
    englishName: "The Stories",
  },
  {
    number: 29,
    name: "Al-Ankabut",
    arabic: "ٱلْعَنْكَبُوت",
    englishName: "The Spider",
  },
  {
    number: 30,
    name: "Ar-Rum",
    arabic: "ٱلرُّوم",
    englishName: "The Romans",
  },
  { number: 31, name: "Luqmaan", arabic: "لُقْمَان", englishName: "Luqman" },
  {
    number: 32,
    name: "As-Sajda",
    arabic: "ٱلسَّجْدَة",
    englishName: "The Prostration",
  },
  {
    number: 33,
    name: "Al-Ahzaab",
    arabic: "ٱلْأَحْزَاب",
    englishName: "The Combined Forces",
  },
  {
    number: 34,
    name: "Saba (surah)",
    arabic: "سَبَأʾ",
    englishName: "Sheba",
  },
  { number: 35, name: "Faatir", arabic: "فَاطِر", englishName: "Originator" },
  { number: 36, name: "Yaseen", arabic: "يس", englishName: "Ya Sin" },
  {
    number: 37,
    name: "As-Saaffaat",
    arabic: "ٱلصَّافَّات",
    englishName: "Those who set the Ranks",
  },
  { number: 38, name: "Saad", arabic: "ص", englishName: 'The Letter "Saad"' },
  {
    number: 39,
    name: "Az-Zumar",
    arabic: "ٱلزُّمَر",
    englishName: "The Troops",
  },
  {
    number: 40,
    name: "Ghafir",
    arabic: "غَافِر",
    englishName: "The Forgiver",
  },
  {
    number: 41,
    name: "Fussilat",
    arabic: "فُصِّلَت",
    englishName: "Explained in Detail",
  },
  {
    number: 42,
    name: "Ash_Shooraa",
    arabic: "ٱلشُّورىٰ",
    englishName: "The Consultation",
  },
  {
    number: 43,
    name: "Az-Zukhruf",
    arabic: "ٱلْزُّخْرُف",
    englishName: "The Ornaments of Gold",
  },
  {
    number: 44,
    name: "Ad-Dukhaan",
    arabic: "ٱلدُّخَان",
    englishName: "The Smoke",
  },
  {
    number: 45,
    name: "Al-Jaathiyah",
    arabic: "ٱلْجَاثِيَة",
    englishName: "The Crouching",
  },
  {
    number: 46,
    name: "Al-Ahqaaf",
    arabic: "ٱلْأَحْقَاف",
    englishName: "The Wind-Curved Sandhills",
  },
  {
    number: 47,
    name: "Muhammad",
    arabic: "مُحَمَّد",
    englishName: "Muhammad",
  },
  {
    number: 48,
    name: "Al-Fath",
    arabic: "ٱلْفَتْح",
    englishName: "The Victory",
  },
  {
    number: 49,
    name: "Al-Hujuraat",
    arabic: "ٱلْحُجُرَات",
    englishName: "The Rooms",
  },
  { number: 50, name: "Qaaf", arabic: "ق", englishName: 'The Letter "Qaf"' },
  {
    number: 51,
    name: "Adh-Dhaariyaat",
    arabic: "ٱلذَّارِيَات",
    englishName: "The Winnowing Winds",
  },
  {
    number: 52,
    name: "At-Toor",
    arabic: "ٱلطُّور",
    englishName: "The Mount",
  },
  {
    number: 53,
    name: "An-Najm",
    arabic: "ٱلنَّجْم",
    englishName: "The Star",
  },
  {
    number: 54,
    name: "Al-Qamar",
    arabic: "ٱلْقَمَر",
    englishName: "The Moon",
  },
  {
    number: 55,
    name: "Ar-Rahman",
    arabic: "ٱلرَّحْمَٰن",
    englishName: "The Beneficent",
  },
  {
    number: 56,
    name: "Al-Waqi'a",
    arabic: "ٱلْوَاقِعَة",
    englishName: "The Inevitable",
  },
  {
    number: 57,
    name: "Al-Hadeed",
    arabic: "ٱلْحَدِيد",
    englishName: "The Iron",
  },
  {
    number: 58,
    name: "Al-Mujadila",
    arabic: "ٱلْمُجَادِلَة",
    englishName: "The Pleading Woman",
  },
  {
    number: 59,
    name: "Al-Hashr",
    arabic: "ٱلْحَشْر",
    englishName: "The Exile",
  },
  {
    number: 60,
    name: "Al-Mumtahanah",
    arabic: "ٱلْمُمْتَحَنَة",
    englishName: "She that is to be examined",
  },
  {
    number: 61,
    name: "As-Saff",
    arabic: "ٱلصَّفّ",
    englishName: "The Ranks",
  },
  {
    number: 62,
    name: "Al-Jumu'ah",
    arabic: "ٱلْجُمُعَة",
    englishName: "The Congregation, Friday",
  },
  {
    number: 63,
    name: "Al-Munafiqoon",
    arabic: "ٱلْمُنَافِقُون",
    englishName: "The Hypocrites",
  },
  {
    number: 64,
    name: "At-Taghabun",
    arabic: "ٱلتَّغَابُن",
    englishName: "The Mutual Disillusion",
  },
  {
    number: 65,
    name: "At-Talaq",
    arabic: "ٱلطَّلَاق",
    englishName: "The Divorce",
  },
  {
    number: 66,
    name: "At-Tahreem",
    arabic: "ٱلتَّحْرِيم",
    englishName: "The Prohibition",
  },
  {
    number: 67,
    name: "Al-Mulk",
    arabic: "ٱلْمُلْك",
    englishName: "The Sovereignty",
  },
  {
    number: 68,
    name: "Al-Qalam",
    arabic: "ٱلْقَلَم",
    englishName: "The Pen",
  },
  {
    number: 69,
    name: "Al-Haaqqa",
    arabic: "ٱلْحَاقَّة",
    englishName: "The Reality",
  },
  {
    number: 70,
    name: "Al-Ma'aarij",
    arabic: "ٱلْمَعَارِج",
    englishName: "The Ascending Stairways",
  },
  { number: 71, name: "Nooh", arabic: "نُوح", englishName: "Noah" },
  { number: 72, name: "Al-Jinn", arabic: "ٱلْجِنّ", englishName: "The Jinn" },
  {
    number: 73,
    name: "Al-Muzzammil",
    arabic: "ٱلْمُزَّمِّل",
    englishName: "The Enshrouded One",
  },
  {
    number: 74,
    name: "Al-Muddaththir",
    arabic: "ٱلْمُدَّثِّر",
    englishName: "The Cloaked One",
  },
  {
    number: 75,
    name: "Al-Qiyamah",
    arabic: "ٱلْقِيَامَة",
    englishName: "The Resurrection",
  },
  {
    number: 76,
    name: "Al-Insaan",
    arabic: "ٱلْإِنْسَان",
    englishName: "The Man",
  },
  {
    number: 77,
    name: "Al-Mursalaat",
    arabic: "المرسلات ٱلْمُرْسَلَات",
    englishName: "The Emissaries",
  },
  {
    number: 78,
    name: "An-Naba'",
    arabic: "ٱلنَّبَأʾ",
    englishName: "The Tidings",
  },
  {
    number: 79,
    name: "An-Naazi'aat",
    arabic: "ٱلنَّازِعَات",
    englishName: "Those who drag forth",
  },
  { number: 80, name: "Abasa", arabic: "عَبَسَ", englishName: "He Frowned" },
  {
    number: 81,
    name: "At-Takweer",
    arabic: "ٱلتَّكْوِير",
    englishName: "The Overthrowing",
  },
  {
    number: 82,
    name: "Al-Infitar",
    arabic: "ٱلْإِنْفِطَار",
    englishName: "The Cleaving",
  },
  {
    number: 83,
    name: "Al-Mutaffifeen",
    arabic: "ٱلْمُطَفِّفِين",
    englishName: "The Defrauding",
  },
  {
    number: 84,
    name: "Al-Inshiqaaq",
    arabic: "ٱلْإِنْشِقَاق",
    englishName: "The Sundering",
  },
  {
    number: 85,
    name: "Al-Burooj",
    arabic: "ٱلْبُرُوج",
    englishName: "The Mansions of the Stars",
  },
  {
    number: 86,
    name: "At-Taariq",
    arabic: "ٱلطَّارِق",
    englishName: "The Nightcommer",
  },
  {
    number: 87,
    name: "Al-A'laa",
    arabic: "ٱلْأَعْلَىٰ",
    englishName: "The Most High",
  },
  {
    number: 88,
    name: "Al-Ghaashiyah",
    arabic: "ٱلْغَاشِيَة",
    englishName: "The Overwhelming",
  },
  {
    number: 89,
    name: "Al-Fajr",
    arabic: "ٱلْفَجْر",
    englishName: "The Dawn",
  },
  {
    number: 90,
    name: "Al-Balad",
    arabic: "ٱلْبَلَد",
    englishName: "The City",
  },
  {
    number: 91,
    name: "Ash-Shams",
    arabic: "ٱلشَّمْس",
    englishName: "The Sun",
  },
  {
    number: 92,
    name: "Al-Layl",
    arabic: "ٱللَّيْل",
    englishName: "The Night",
  },
  {
    number: 93,
    name: "Ad-Dhuha",
    arabic: "ٱلضُّحَىٰ",
    englishName: "The Morning Hours",
  },
  {
    number: 94,
    name: "Ash-Sharh (Al-Inshirah)",
    arabic: "ٱلشَّرْح",
    englishName: "The Relief",
  },
  { number: 95, name: "At-Teen", arabic: "ٱلتِّين", englishName: "The Fig" },
  {
    number: 96,
    name: "Al-Alaq",
    arabic: "ٱلْعَلَق",
    englishName: "The Clot",
  },
  {
    number: 97,
    name: "Al-Qadr",
    arabic: "ٱلْقَدْر",
    englishName: "The Power",
  },
  {
    number: 98,
    name: "Al-Bayyinahh",
    arabic: "ٱلْبَيِّنَة",
    englishName: "The Clear Proof",
  },
  {
    number: 99,
    name: "Az-Zalzalah",
    arabic: "ٱلزَّلْزَلَة",
    englishName: "The Earthquake",
  },
  {
    number: 100,
    name: "Al-'Aadiyaat",
    arabic: "ٱلْعَادِيَات",
    englishName: "The Courser",
  },
  {
    number: 101,
    name: "Al-Qaari'ah",
    arabic: "ٱلْقَارِعَة",
    englishName: "The Calamity",
  },
  {
    number: 102,
    name: "At-Takaathur",
    arabic: "ٱلتَّكَاثُر",
    englishName: "The Rivalry in world increase",
  },
  {
    number: 103,
    name: "Al-'Asr",
    arabic: "ٱلْعَصْر",
    englishName: "The Declining Day",
  },
  {
    number: 104,
    name: "Al-Humazah",
    arabic: "ٱلْهُمَزَة",
    englishName: "The Traducer",
  },
  {
    number: 105,
    name: "Al-Feel",
    arabic: "ٱلْفِيل",
    englishName: "The Elephant",
  },
  { number: 106, name: "Quraysh", arabic: "قُرَيْش", englishName: "Quraysh" },
  {
    number: 107,
    name: "Al-Maa'oon",
    arabic: "ٱلْمَاعُون",
    englishName: "The Small kindnesses",
  },
  {
    number: 108,
    name: "Al-Kawthar",
    arabic: "ٱلْكَوْثَر",
    englishName: "The Abundance",
  },
  {
    number: 109,
    name: "Al-Kaafiroon",
    arabic: "ٱلْكَافِرُون",
    englishName: "The Disbelievers",
  },
  {
    number: 110,
    name: "An-Nasr",
    arabic: "ٱلنَّصْر",
    englishName: "The Divine Support",
  },
  {
    number: 111,
    name: "Al-Masad",
    arabic: "ٱلْمَسَد",
    englishName: "The Palm Fiber",
  },
  {
    number: 112,
    name: "Al-Ikhlaas",
    arabic: "ٱلْإِخْلَاص",
    englishName: "The Sincerity",
  },
  {
    number: 113,
    name: "Al-Falaq",
    arabic: "ٱلْفَلَق",
    englishName: "The Daybreak",
  },
  { number: 114, name: "Al-Naas", arabic: "ٱلنَّاس", englishName: "Mankind" },
];

export default SurahListRepo;
