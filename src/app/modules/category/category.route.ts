import express from 'express';
import { CategoryControllers } from './category.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

// শুধুমাত্র অ্যাডমিন ক্যাটাগরি বানাতে পারবে
router.post('/', auth('ADMIN'), CategoryControllers.createCategory);
// সবাই ক্যাটাগরি দেখতে পারবে
router.get('/', CategoryControllers.getAllCategories);

export const CategoryRoutes = router;