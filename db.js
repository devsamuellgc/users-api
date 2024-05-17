import mariadb from "mariadb";

export const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "fs25_db",
  port: 3309,
});
