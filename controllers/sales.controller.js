import * as salesServices from "../services/sales.services.js";

async function listSales(req, res) {
  const sales = await salesServices.listSales();
  return res.json({
    data: sales,
    message: "Vendas listadas com sucesso!",
  });
}

async function listSale(req, res) {
  const id = req.params.id;
  const sales = await salesServices.listSale(id);
  return res.json({ data: sales, message: "Venda listada com sucesso!" });
}

async function deleteSales(req, res) {
  const id = req.params.id;
  const sales = await salesServices.removeSales(id);
  return res.json({ data: sales, message: "Venda deletada com sucesso!" });
}

async function createSales(req, res) {
  const sales = req.body;
  await salesServices.createSales(sales);
  return res.json({ data: sales, message: "Venda criada com sucesso!" });
}

async function editSales(req, res) {
  const id = req.params.id;
  const sales = req.body;
  const editedSales = await salesServices.editSales(id, sales);
  return res.json({
    data: editedSales,
    message: "Venda editada com sucesso!",
  });
}

export { listSales, listSale, deleteSales, createSales, editSales };
