import { db } from "../connection";
import { addressSchema, citySchema, countrySchema } from "../schema";
import { countries as mockCountries } from "./data/countries";
import { cities as mockCities } from "./data/cities";
import { addresses as mockAddresses } from "./data/adresses";
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
