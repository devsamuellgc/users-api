import * as usersController from "../controllers/users.controller.js";
import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/users", usersController.listUsers);
usersRouter.get("/user/:id", usersController.listUser);
usersRouter.delete("/user/:id", usersController.deleteUser);
usersRouter.post("/user", usersController.createUser);
usersRouter.post("/login", usersController.login);
usersRouter.patch("/user/:id", usersController.editUser);

export default usersRouter;
