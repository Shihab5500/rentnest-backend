import { Request, Response, NextFunction } from 'express';
import { PropertyServices } from './property.service';
import { sendResponse } from '../../utils/sendResponse';

const createProperty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const landlordId = req.user.id; // লগইন করা Landlord এর ID টোকেন থেকে আসবে
    const result = await PropertyServices.createProperty(landlordId, req.body);
    sendResponse(res, { statusCode: 201, success: true, message: "Property created successfully", data: result });
  } catch (err) { next(err); }
};

const getAllProperties = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PropertyServices.getAllProperties();
    sendResponse(res, { statusCode: 200, success: true, message: "Properties fetched successfully", data: result });
  } catch (err) { next(err); }
};

export const PropertyControllers = { createProperty, getAllProperties };