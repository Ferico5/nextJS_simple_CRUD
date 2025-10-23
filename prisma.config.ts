import "dotenv/config";  // ini akan load file .env di root
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: process.env.DATABASE_URL!,  // pakai process.env secara langsung
  },
});
