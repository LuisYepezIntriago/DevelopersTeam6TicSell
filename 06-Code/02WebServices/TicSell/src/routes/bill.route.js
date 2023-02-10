import { Router } from "express";
import * as billController from "../controllers/biillController";

const router = Router();
router.post("/", billController.postBill);
router.get("/", billController.getBill);
router.get("/:id", billController.getBillvById);
router.put("/:id", billController.updateBillById);
router.delete("/:id", billController.deleteBillById);
export default router;
