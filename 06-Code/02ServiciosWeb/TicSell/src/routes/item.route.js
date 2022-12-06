import { Router } from "express";
import * as itemController from "../controllers/itemController";

const router = Router();
router.post("/", itemController.postItems);
export default router;