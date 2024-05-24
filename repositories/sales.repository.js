import { pool } from "../db.js";

async function listSales() {
  const conn = await pool.getConnection();
  const rows = await conn.query("SELECT * FROM sales");
  return rows;
}

async function listSale(id) {
  const conn = await pool.getConnection();
  const sales = await conn.query(`SELECT * FROM sales WHERE id = ${id}`);
  return sales;
}

async function removeSales(id) {
  const conn = await pool.getConnection();
  const sales = await listSales(id);
  await conn.query(`DELETE FROM sales WHERE id = ${id}`);
  return sales;
}

async function createSales(sales) {
  const conn = await pool.getConnection();
  const keys = Object.keys(sales);
  const createdSales = await conn.query(`
      INSERT INTO sales (${keys.map((chave) => chave)})
      VALUES (${keys.map((chave) =>
        typeof sales[chave] === "string" ? `'${sales[chave]}'` : sales[chave]
      )});
    `);
  return createdSales.affectedRows;
}

async function editSales(id, editedSales) {
  const conn = await pool.getConnection();
  const chaves = Object.keys(editedSales);
  const query = `
    UPDATE sales
    SET${chaves.map((chave) =>
      typeof editedSales[chave] === "string"
        ? ` ${chave} = '${editedSales[chave]}'`
        : ` ${chave} = ${editedSales[chave]}`
    )}
    WHERE id = ${id};
    `;
  await conn.query(query);
  const sales = await conn.query(`
    SELECT * FROM sales WHERE id = '${id}';
    `);
  return sales;
}

export { listSales, listSale, removeSales, createSales, editSales };
