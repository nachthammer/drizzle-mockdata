const databaseUrl = `postgres://postgres.cqaxuxswwwdeatdsnqzs:45orA53PekxqtAT0@aws-0-eu-central-1.pooler.supabase.com:6543/postgres`;

// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const globalQueryClient = global as unknown as {
  queryClient?: postgres.Sql;
};

const queryClient =
  globalQueryClient.queryClient ?? postgres(env.databaseUrl, { max: 12 });

if (env.nodeEnv === "development") globalQueryClient.queryClient = queryClient;
const db = drizzle(queryClient);
