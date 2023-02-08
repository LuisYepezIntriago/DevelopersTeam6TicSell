import { Router } from "express";
import * as providerController from "../controllers/provider";

const router = Router();
router.post("/", providerController.postProviders);
router.get("/", providerController.getProvider);
router.get("/:id", providerController.getProviderById);
router.put("/:id", providerController.updateProviderById);
router.delete("/:id", providerController.deleteProviderById);
export default router;

