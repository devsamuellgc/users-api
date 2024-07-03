import { connection } from "../db.js";

async function listUsers() {
  const rows = await connection.query("SELECT * FROM users");
  return rows;
}

async function listUser(id) {
  const user = await connection.query(`SELECT * FROM users WHERE id = ${id}`);
  return user;
}

async function listUserByEmail(email) {
  const user = await connection.query(
    `SELECT * FROM users WHERE email = '${email}'`
  );
  return user;
}

async function removeUser(id) {
  const response = await connection.query(`DELETE FROM users WHERE id = ${id}`);
  return response.affectedRows;
}

async function createUser(user) {
  const keys = Object.keys(user);
  const createdUser = await connection.query(`
    INSERT INTO users (${keys.map((chave) => chave)})
    VALUES (${keys.map((chave) =>
      typeof user[chave] === "string" ? `'${user[chave]}'` : user[chave]
    )});
  `);
  return createdUser.affectedRows;
}

async function editUser(id, editedUser) {
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
  await connection.query(query);
  const user = await connection.query(`
  SELECT * FROM users WHERE id = '${id}';
  `);
  return user;
}

export {
  listUsers,
  listUser,
  removeUser,
  createUser,
  editUser,
  listUserByEmail,
};
