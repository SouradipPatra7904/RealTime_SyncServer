import { config } from "dotenv";
config();

export const development = {
  client: "pg",
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: "./database_config/migrations",
  },
  seeds: {
    directory: "./database_config/seeds/dev",
  },
  useNullAsDefault: true,
};