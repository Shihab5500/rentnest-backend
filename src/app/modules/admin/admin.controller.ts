import { Request, Response, NextFunction } from 'express';
import { AdminServices } from './admin.service';
import { sendResponse } from '../../utils/sendResponse';

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdminServices.getAllUsers();
    sendResponse(res, { statusCode: 200, success: true, message: "Users fetched successfully", data: result });
  } catch (err) { next(err); }
};

const updateUserStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdminServices.updateUserStatus(req.params.id, req.body.status);
    sendResponse(res, { statusCode: 200, success: true, message: "User status updated successfully", data: result });
  } catch (err) { next(err); }
};

export const AdminControllers = { getAllUsers, updateUserStatus };