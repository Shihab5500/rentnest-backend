import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { AuthRoutes } from './app/modules/auth/auth.route';
import { CategoryRoutes } from './app/modules/category/category.route';
import { PropertyRoutes } from './app/modules/property/property.route';
import { RentalRoutes } from './app/modules/rental/rental.route';
import { AdminRoutes } from './app/modules/admin/admin.route';
import { PaymentRoutes } from './app/modules/payment/payment.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

const app: Application = express();

app.use(express.json());
app.use(cors());

// Application Routes
app.use('/api/auth', AuthRoutes);
app.use('/api/categories', CategoryRoutes);
app.use('/api', PropertyRoutes); 
app.use('/api', RentalRoutes); 
app.use('/api/admin', AdminRoutes); 
app.use('/api/payments', PaymentRoutes); // এই লাইনটি নতুন যুক্ত হলো

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'RentNest API is running perfectly!' });
});

// Global Error Handler & Not Found
app.use(globalErrorHandler);
app.use(notFound);

export default app;