import express from 'express';
import { PaymentControllers } from './payment.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

// শুধুমাত্র Tenant-রাই পেমেন্ট করতে পারবে
router.post('/create-payment-intent', auth('TENANT'), PaymentControllers.createPaymentIntent);

export const PaymentRoutes = router;