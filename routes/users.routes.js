import * as usersController from "../controllers/users.controller.js";
import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", usersController.listUsers);
usersRouter.get("/:id", usersController.listUser);
usersRouter.delete("/:id", usersController.deleteUser);
usersRouter.post("/user", usersController.createUser);
usersRouter.patch("/:id", usersController.editUser);

export default usersRouter;
