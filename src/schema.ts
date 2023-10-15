import { sql } from "drizzle-orm";
import {
  serial,
  text,
  timestamp,
  pgTable,
  varchar,
  integer,
} from "drizzle-orm/pg-core";

export const countrySchema = pgTable("country", {
  id: serial("country_id").primaryKey(),
  name: varchar("name", { length: 64 }).notNull(),
  language: varchar("language", { length: 64 }).notNull(),
  foundationDate: timestamp("foundation_date").notNull(),
  lastUpdate: timestamp("last_update")
    .notNull()
    .default(sql`now()`),
});

export const citySchema = pgTable("city", {
  id: serial("city_id").primaryKey(),
  name: varchar("name", { length: 64 }),
  nofCitizens: integer("nof_citizens"),
  countryId: integer("countryId")
    .references(() => countrySchema.id)
    .notNull(),
  lastUpdate: timestamp("last_update")
    .notNull()
    .default(sql`now()`),
});

export const addressSchema = pgTable("address", {
  id: serial("address_id").primaryKey(),
  address: varchar("address", { length: 64 }).notNull(),
  postalCode: varchar("postal_code", { length: 10 }),
  cityId: integer("city_id")
    .references(() => citySchema.id)
    .notNull(),
  lastUpdate: timestamp("last_update")
    .notNull()
    .default(sql`now()`),
});

export const actorSchema = pgTable("actor", {
  id: serial("actor_id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  phoneNumber: varchar("phone_number", { length: 20 }),
  adressId: integer("address_id")
    .references(() => addressSchema.addressId)
    .notNull(),
  lastUpdate: timestamp("last_update")
    .notNull()
    .default(sql`now()`),
});

export const movieSchema = pgTable("movie", {
  id: serial("movie_id").primaryKey(),
  title: text("title").notNull(),
  budget: integer("budget").notNull(),
  imdbScore: integer("imdb_score").notNull(),
  lastUpdate: timestamp("last_update")
    .notNull()
    .default(sql`now()`),
});

export const movieActorsSchema = pgTable("movie_actors_association", {
  id: serial("movie_actors_id").primaryKey(),
  actorId: integer("actor_id")
    .references(() => actorSchema.id)
    .notNull(),
  movieId: integer("movie_id")
    .references(() => movieSchema.id)
    .notNull(),
  lastUpdate: timestamp("last_update")
    .notNull()
    .default(sql`now()`),
});
