import {Router} from 'express';
import * as customerController from '../controllers/customer';

const router = Router();
router.post('/', customerController.postCustomer);
router.get('/', customerController.getCustomer);
router.get('/:id', customerController.getCustomerById);
router.put('/:id', customerController.updateCustomerById);
router.delete('/:id', customerController.deleteCustomerById);
export default router;
