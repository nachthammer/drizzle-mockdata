// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { databaseUrl } from "./const";

const globalQueryClient = global as unknown as {
  queryClient?: postgres.Sql;
};

const queryClient =
  globalQueryClient.queryClient ?? postgres(databaseUrl, { max: 12 });

if (process.env.nodeEnv === "development")
  globalQueryClient.queryClient = queryClient;

export const db = drizzle(queryClient);
