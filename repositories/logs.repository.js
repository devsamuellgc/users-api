import { pool } from "../db.js";

async function createLog(log) {
  const conn = await pool.getConnection();
  const keys = Object.keys(log);
  const createdUser = await conn.query(`
      INSERT INTO logs (${keys.map((chave) => chave)})
      VALUES (${keys.map((chave) =>
        typeof log[chave] === "string" ? `"${log[chave]}"` : log[chave]
      )});
    `);
  return createdUser.affectedRows;
}

export { createLog };
