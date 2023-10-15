import { migrate } from "drizzle-orm/postgres-js/migrator";
import { databaseUrl as _databaseUrl } from "./const";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const databaseUrl = drizzle(postgres(_databaseUrl, { ssl: "require", max: 1 }));

const main = async () => {
  try {
    await migrate(databaseUrl, { migrationsFolder: "migrations" });
    /* eslint-disable-next-line no-console */
    console.log("Migration complete");
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.log(error);
  }
  process.exit(0);
};

/* eslint-disable @typescript-eslint/no-empty-function */
main()
  .then(() => {})
  .catch(() => {});
