import { Request, Response, NextFunction } from 'express';
import { RentalServices } from './rental.service';
import { sendResponse } from '../../utils/sendResponse';

const createRentalRequest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RentalServices.createRentalRequest(req.user.id, req.body);
    sendResponse(res, { statusCode: 201, success: true, message: "Rental request submitted successfully", data: result });
  } catch (err) { next(err); }
};

const getMyRentalRequests = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RentalServices.getMyRentalRequests(req.user.id);
    sendResponse(res, { statusCode: 200, success: true, message: "Rental requests fetched successfully", data: result });
  } catch (err) { next(err); }
};

const updateRequestStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RentalServices.updateRequestStatus(req.params.id, req.body.status);
    sendResponse(res, { statusCode: 200, success: true, message: "Rental request status updated successfully", data: result });
  } catch (err) { next(err); }
};

export const RentalControllers = { createRentalRequest, getMyRentalRequests, updateRequestStatus };