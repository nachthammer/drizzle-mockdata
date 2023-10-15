import { db } from "../connection";

export async function seed() {
  const countries = await db.insert().into();
}
