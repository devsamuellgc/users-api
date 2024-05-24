import * as expensesRepository from "../repositories/expenses.repository.js";

async function listExpenses() {
  const expenses = await expensesRepository.listExpenses();
  return expenses;
}

async function listExpense(id) {
  const expense = await expensesRepository.listExpense(id);
  return expense;
}

async function removeExpense(id) {
  const removedExpense = await expensesRepository.removeExpense(id);
  return removedExpense;
}

async function createExpense(expense) {
  const createdExpense = await expensesRepository.createExpense(expense);
  return createdExpense;
}

async function editExpense(id, expense) {
  const editedExpense = await expensesRepository.editExpense(id, expense);
  return editedExpense;
}

export { listExpenses, listExpense, removeExpense, createExpense, editExpense };
