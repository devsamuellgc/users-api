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
  const response = await conn.query(`DELETE FROM users WHERE id = ${id}`);
  return response.affectedRows;
}

async function createUser(user) {
  const conn = await pool.getConnection();
  const keys = Object.keys(user);
  const createdUser = await conn.query(`
    INSERT INTO users (${keys.map((chave) => chave)})
    VALUES (${keys.map((chave) =>
      typeof user[chave] === "string" ? `'${user[chave]}'` : user[chave]
    )});
  `);
  return createdUser.affectedRows;
}

async function editUser(id, editedUser) {
  const conn = await pool.getConnection();
  const chaves = Object.keys(editedUser);
  const query = `
  UPDATE users
  SET${chaves.map((chave) =>
    typeof editedUser[chave] === "string"
      ? ` ${chave} = '${editedUser[chave]}'`
      : ` ${chave} = ${editedUser[chave]}`
  )}
  WHERE id = ${id};
  `;
  await conn.query(query);
  const user = await conn.query(`
  SELECT * FROM users WHERE id = '${id}';
  `);
  return user;
}

export { listUsers, listUser, removeUser, createUser, editUser };
