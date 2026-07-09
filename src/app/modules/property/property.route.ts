import express from 'express';
import { PropertyControllers } from './property.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

// Public Route: সবাই প্রপার্টি দেখতে পারবে
router.get('/properties', PropertyControllers.getAllProperties);

// Landlord Route: শুধুমাত্র Landlord প্রপার্টি তৈরি করতে পারবে
router.post('/landlord/properties', auth('LANDLORD'), PropertyControllers.createProperty);

export const PropertyRoutes = router;