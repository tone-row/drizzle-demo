import { InferModel } from "drizzle-orm";
import { db } from "./db/db";
import * as schema from "./db/schema";

(async () => {
  // pull name from command line
  const name = process.argv[2];
  if (!name) {
    console.error("Please provide a name");
    process.exit(1);
  }

  // create a new user
  const id = await createUser({ fullName: name });
  console.log(`Created user with id ${id}`);

  const users = await db.select().from(schema.users);
  console.log(users);

  process.exit(0);
})();

async function createUser(user: InferModel<typeof schema.users, "insert">) {
  const response = await db.insert(schema.users).values(user).returning();
  return response[0].id;
}
