import express from 'express';
import { RentalControllers } from './rental.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

// Tenant এর জন্য: রিকোয়েস্ট পাঠানো এবং নিজের রিকোয়েস্ট দেখা
router.post('/rentals', auth('TENANT'), RentalControllers.createRentalRequest);
router.get('/rentals', auth('TENANT'), RentalControllers.getMyRentalRequests);

// Landlord এর জন্য: রিকোয়েস্ট Approve বা Reject করা
router.patch('/landlord/requests/:id', auth('LANDLORD'), RentalControllers.updateRequestStatus);

export const RentalRoutes = router;