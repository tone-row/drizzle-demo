import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

// schema.ts
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
  createdAt: timestamp("created_at"),
});
