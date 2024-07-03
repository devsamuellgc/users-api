import { connection } from "../db.js";

async function createLog(log) {
  const keys = Object.keys(log);
  const createdUser = await connection.query(`
      INSERT INTO logs (${keys.map((chave) => chave)})
      VALUES (${keys.map((chave) =>
        typeof log[chave] === "string" ? `"${log[chave]}"` : log[chave]
      )});
    `);
  return createdUser.affectedRows;
}

export { createLog };
