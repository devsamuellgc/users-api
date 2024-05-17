import { pool } from "../db.js";

async function listUsers() {
  const conn = await pool.getConnection();
  const rows = await conn.query("SELECT * FROM users");
  return rows;
}

async function listUser(id) {
  const conn = await pool.getConnection();
  const user = await conn.query(`SELECT * FROM users WHERE id = ${id}`);
  return user;
}

async function removeUser(id) {
  const conn = await pool.getConnection();
  const user = await listUser(id);
  await conn.query(`DELETE FROM users WHERE id = ${id}`);
  return user;
}

export { listUsers, listUser, removeUser };
