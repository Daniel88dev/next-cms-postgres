import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const dataTable = pgTable("data_table", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  identification: varchar({ length: 20 }).notNull(),
  content: text(),
});
