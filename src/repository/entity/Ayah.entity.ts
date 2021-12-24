import { Transform } from "class-transformer";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

class Translations {
  @Column()
  urdu: string;

  @Column()
  english: string;
}

@Entity()
class AyahEntity {
  @ObjectIdColumn()
  @Transform(({ value }) => value.toString())
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
