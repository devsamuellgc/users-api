import { connection } from "../db.js";

async function listExpenses() {
  const rows = await connection.query("SELECT * FROM expenses");
  return rows;
}

async function listExpense(id) {
  const expense = await connection.query(
    `SELECT * FROM expenses WHERE id = ${id}`
  );
  return expense;
}

async function removeExpense(id) {
  const expense = await listExpense(id);
  await connection.query(`DELETE FROM expenses WHERE id = ${id}`);
  return expense;
}

async function createExpense(expense) {
  const keys = Object.keys(expense);
  const createdExpense = await connection.query(`
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
  await connection.query(query);
  const expense = await connection.query(`
    SELECT * FROM expenses WHERE id = '${id}';
    `);
  return expense;
}

export { listExpenses, listExpense, removeExpense, createExpense, editExpense };
