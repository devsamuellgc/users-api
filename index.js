import express from "express";
import usersRouter from "./routes/users.routes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use(usersRouter);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
