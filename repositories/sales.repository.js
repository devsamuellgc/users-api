import { connection } from "../db.js";

async function listSales() {
  const rows = await connection.query("SELECT * FROM sales");
  return rows;
}

async function listSale(id) {
  const sales = await connection.query(`SELECT * FROM sales WHERE id = ${id}`);
  return sales;
}

async function removeSales(id) {
  const sales = await listSales(id);
  await connection.query(`DELETE FROM sales WHERE id = ${id}`);
  return sales;
}

async function createSales(sales) {
  const keys = Object.keys(sales);
  const createdSales = await connection.query(`
      INSERT INTO sales (${keys.map((chave) => chave)})
      VALUES (${keys.map((chave) =>
        typeof sales[chave] === "string" ? `'${sales[chave]}'` : sales[chave]
      )});
    `);
  return createdSales.affectedRows;
}

async function editSales(id, editedSales) {
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
  await connection.query(query);
  const sales = await connection.query(`
    SELECT * FROM sales WHERE id = '${id}';
    `);
  return sales;
}

export { listSales, listSale, removeSales, createSales, editSales };
