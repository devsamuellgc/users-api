import express from "express";
import usersRouter from "./routes/users.routes.js";
import expensesRouter from "./routes/expenses.routes.js";
import salesRouter from "./routes/sales.routes.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use(usersRouter);
app.use(expensesRouter);
app.use(salesRouter);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
