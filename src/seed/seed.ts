import { db } from "../connection";
import {
  actorSchema,
  addressSchema,
  citySchema,
  countrySchema,
  movieSchema,
} from "../schema";
import { countries as mockCountries } from "./data/countries";
import { cities as mockCities } from "./data/cities";
import { addresses as mockAddresses } from "./data/adresses";
import { actors as mockActors } from "./data/actors";
import { movies as mockMovies } from "./data/movies";
import { dropAllData } from "./drop-all";

export async function seed() {
  console.info("Dropping all data...");
  await dropAllData();
  console.info("Dropping data successful");

  const countries = await db
    .insert(countrySchema)
    .values([...mockCountries])
    .returning({
      countryId: countrySchema.id,
      countryName: countrySchema.name,
    });

  console.info(`Inserted ${countries.length} countries.`);

  const _mockCities = mockCities
    .map((city) => ({
      name: city.name,
      nofCitizens: city.nofCitizens,
      countryId: countries.find(
        (country) => country.countryName === city.countryName
      ).countryId,
    }))
    .filter((city) => city.countryId !== undefined);

  const cities = await db
    .insert(citySchema)
    .values([..._mockCities])
    .returning({
      cityId: citySchema.id,
      cityName: citySchema.name,
    });

  console.info(`Inserted ${cities.length} cities.`);

  const _mockAddresses = mockAddresses
    .map((address) => ({
      address: address.address,
      postalCode: address.postalCode,
      cityId: cities.find((city) => city.cityName === address.cityName).cityId,
    }))
    .filter((address) => address.cityId !== undefined);

  const addresses = await db
    .insert(addressSchema)
    .values([..._mockAddresses])
    .returning({
      addressId: addressSchema.id,
      addressName: addressSchema.address,
    });
  console.info(`Inserted ${addresses.length} addresses.`);

  const _mockActors = mockActors
    .map((actor) => ({
      firstName: actor.firstName,
      lastName: actor.lastName,
      phoneNumber: actor.phoneNumber,
      adressId: addresses.find(
        (address) => address.addressName === actor.adressName
      ).addressId,
    }))
    .filter((actor) => actor.adressId !== undefined);

  const actors = await db
    .insert(actorSchema)
    .values([..._mockActors])
    .returning({
      actorId: actorSchema.id,
    });
  console.info(`Inserted ${actors.length} actors.`);

  const _mockMovies = mockMovies.map((movie) => ({
    title: movie.title,
    budget: movie.budget,
    imdbScore: movie.imdbScore,
  }));

  const movies = await db
    .insert(movieSchema)
    .values([..._mockMovies])
    .returning({
      movieId: movieSchema.id,
    });
  console.info(`Inserted ${movies.length} movies.`);
}

seed()
  .then(() => {
    console.info("Seed finished.");
    process.exit(0);
  })
  .catch((e) => {
    console.error("Seed failed with the following error:", e);
    process.exit(1);
  });
