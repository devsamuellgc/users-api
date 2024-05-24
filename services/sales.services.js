import * as salesRepository from "../repositories/sales.repository.js";

async function listSales() {
  const sales = await salesRepository.listSales();
  return sales;
}

async function listSale(id) {
  const sales = await salesRepository.listSale(id);
  return sales;
}

async function removeSales(id) {
  const removedSales = await salesRepository.removeSales(id);
  return removedSales;
}

async function createSales(sales) {
  const createdSales = await salesRepository.createSales(sales);
  return createdSales;
}

async function editSales(id, sales) {
  const editedSales = await salesRepository.editSales(id, sales);
  return editedSales;
}

export { listSales, listSale, removeSales, createSales, editSales };
