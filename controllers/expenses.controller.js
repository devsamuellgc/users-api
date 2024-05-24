import * as expensesServices from "../services/expenses.services.js";

async function listExpenses(req, res) {
  const expenses = await expensesServices.listExpenses();
  return res.json({
    data: expenses,
    message: "Despesas listadas com sucesso!",
  });
}

async function listExpense(req, res) {
  const id = req.params.id;
  const expense = await expensesServices.listExpense(id);
  return res.json({ data: expense, message: "Despesa listada com sucesso!" });
}

async function deleteExpense(req, res) {
  const id = req.params.id;
  const expense = await expensesServices.removeExpense(id);
  return res.json({ data: expense, message: "Despesa deletada com sucesso!" });
}

async function createExpense(req, res) {
  const expense = req.body;
  await expensesServices.createExpense(expense);
  return res.json({ data: expense, message: "Despesa criada com sucesso!" });
}

async function editExpense(req, res) {
  const id = req.params.id;
  const expense = req.body;
  const editedExpense = await expensesServices.editExpense(id, expense);
  return res.json({
    data: editedExpense,
    message: "Despesa editada com sucesso!",
  });
}

export { listExpenses, listExpense, deleteExpense, createExpense, editExpense };
