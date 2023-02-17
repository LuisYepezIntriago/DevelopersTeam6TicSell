import {Router} from 'express';
import * as stoveController from '../controllers/stoves';

const router = Router();
router.post('/', stoveController.postStoves);
router.get('/', stoveController.getStoves);
router.get('/:id', stoveController.getStoveById);
export default router;
