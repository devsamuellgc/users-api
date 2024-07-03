import pg from "pg";
const { Pool } = pg;

const connection = new Pool({
  host: "dpg-cpqcrg1u0jms738tmi7g-a",
  username: "root",
  password: "pw9vQfKT2dDC8JwXJRzvic3O8Ef9z2GV",
  database: "users_db_pejd",
  port: 5432,
});

export { connection };
