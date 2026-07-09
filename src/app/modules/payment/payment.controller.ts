import { Request, Response, NextFunction } from 'express';
import { PaymentServices } from './payment.service';
import { sendResponse } from '../../utils/sendResponse';

const createPaymentIntent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { rentalRequestId } = req.body;
    const result = await PaymentServices.createPaymentIntent(rentalRequestId);
    
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Payment intent created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const PaymentControllers = {
  createPaymentIntent,
};