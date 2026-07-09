import express from 'express';
import { AdminControllers } from './admin.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

// শুধুমাত্র Admin এগুলো করতে পারবে
router.get('/users', auth('ADMIN'), AdminControllers.getAllUsers);
router.patch('/users/:id', auth('ADMIN'), AdminControllers.updateUserStatus);

export const AdminRoutes = router;