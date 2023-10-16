import { sql } from "drizzle-orm";
import { db } from "../connection";
import {
  actorSchema,
  addressSchema,
  citySchema,
  countrySchema,
  movieActorsSchema,
  movieSchema,
} from "../schema";

export async function dropAllData() {
  await db.delete(actorSchema);
  await db.delete(addressSchema);
  await db.delete(citySchema);
  await db.delete(countrySchema);
  await db.delete(movieSchema);
  await db.delete(movieActorsSchema);

  // Make the primary key sequence counting start at one again so we do not have a growing starting id, every time we do the dataload
  //   await db.execute(sql`
  // ALTER SEQUENCE actor_id_id_seq RESTART;
  // ALTER SEQUENCE address_id_seq RESTART;
  // ALTER SEQUENCE city_id_seq RESTART;
  // ALTER SEQUENCE country_id_seq RESTART;
  // ALTER SEQUENCE movie_id_seq RESTART;
  // ALTER SEQUENCE movie_actors_association_id_seq RESTART;
  // `);
}
