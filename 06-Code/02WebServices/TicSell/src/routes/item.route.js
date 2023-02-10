import { Router } from "express";
import * as itemController from "../controllers/item";

const router = Router();
router.post("/", itemController.postItems);
router.get("/", itemController.getItems);
router.get("/:id", itemController.getItemById);
router.put("/:id", itemController.updateItemById);
router.delete("/:id", itemController.deleteItemById);
export default router;