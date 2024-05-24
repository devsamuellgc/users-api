import { pool } from "../db.js";

async function listExpenses() {
  const conn = await pool.getConnection();
  const rows = await conn.query("SELECT * FROM expenses");
  return rows;
}

async function listExpense(id) {
  const conn = await pool.getConnection();
  const expense = await conn.query(`SELECT * FROM expenses WHERE id = ${id}`);
  return expense;
}

async function removeExpense(id) {
  const conn = await pool.getConnection();
  const expense = await listExpense(id);
  await conn.query(`DELETE FROM expenses WHERE id = ${id}`);
  return expense;
}

async function createExpense(expense) {
  const conn = await pool.getConnection();
  const keys = Object.keys(expense);
  const createdExpense = await conn.query(`
      INSERT INTO expenses (${keys.map((chave) => chave)})
      VALUES (${keys.map((chave) =>
        typeof expense[chave] === "string"
          ? `'${expense[chave]}'`
          : expense[chave]
      )});
    `);
  return createdExpense.affectedRows;
}

async function editExpense(id, editedExpense) {
  const conn = await pool.getConnection();
  const chaves = Object.keys(editedExpense);
  const query = `
    UPDATE expenses
    SET${chaves.map((chave) =>
      typeof editedExpense[chave] === "string"
        ? ` ${chave} = '${editedExpense[chave]}'`
        : ` ${chave} = ${editedExpense[chave]}`
    )}
    WHERE id = ${id};
    `;
  await conn.query(query);
  const expense = await conn.query(`
    SELECT * FROM expenses WHERE id = '${id}';
    `);
  return expense;
}

export { listExpenses, listExpense, removeExpense, createExpense, editExpense };
