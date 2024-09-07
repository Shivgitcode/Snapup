import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: uuid("id").primaryKey().defaultRandom(),
    username: varchar("username", { length: 255 }),
    email: varchar("email", { length: 255 }).unique(),
    password: varchar("email", { length: 255 })
})