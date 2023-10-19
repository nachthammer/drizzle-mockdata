import { sql } from "drizzle-orm";
import { db } from "../connection";
import { actorSchema, movieActorsSchema } from "../schema";

export async function selectAllActors() {
  return db.select().from(actorSchema);
}

// replace with the function you want to test
selectAllActors()
  .then((data) => {
    console.debug({ data });
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error:", err);
    process.exit(1);
  });
