import * as expensesController from "../controllers/expenses.controller.js";
import { Router } from "express";

const expensesRouter = Router();

expensesRouter.get("/expenses", expensesController.listExpenses);
expensesRouter.get("/expense/:id", expensesController.listExpense);
expensesRouter.delete("/expense/:id", expensesController.deleteExpense);
expensesRouter.post("/expense", expensesController.createExpense);
expensesRouter.patch("/expense/:id", expensesController.editExpense);

export default expensesRouter;
