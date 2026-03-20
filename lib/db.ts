import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  // We don't throw here to allow build to continue if it doesn't strictly need SQL
  console.warn("DATABASE_URL is not defined. SQL queries will fail at runtime.");
}

const sql = neon(process.env.DATABASE_URL || "");

export default sql;