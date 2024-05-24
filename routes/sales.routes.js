import * as salesController from "../controllers/sales.controller.js";
import { Router } from "express";

const salesRouter = Router();

salesRouter.get("/sales", salesController.listSales);
salesRouter.get("/sales/:id", salesController.listSale);
salesRouter.delete("/sales/:id", salesController.deleteSales);
salesRouter.post("/sales", salesController.createSales);
salesRouter.patch("/sales/:id", salesController.editSales);

export default salesRouter;
