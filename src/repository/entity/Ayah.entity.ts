import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

class Translations {
  @Column()
  urdu: string;

  @Column()
  english: string;
}

@Entity({ name: "quran" })
class AyahEntity {
  _id: string;

  @ObjectIdColumn()
  id: ObjectID | string; // uci will be the default id of every Ayah

  @Column()
  ayahId: string;

  @Column()
  uci: string;

  @Column()
  number: number;

  @Column()
  surahNumber: number;

  @Column()
  arabic: string;

  @Column((type) => Translations)
  translations: Translations;
}

export default AyahEntity;
