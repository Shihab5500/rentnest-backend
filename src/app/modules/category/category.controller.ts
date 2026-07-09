import { Request, Response, NextFunction } from 'express';
import { CategoryServices } from './category.service';
import { sendResponse } from '../../utils/sendResponse';

const createCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CategoryServices.createCategory(req.body);
    sendResponse(res, { statusCode: 201, success: true, message: "Category created successfully", data: result });
  } catch (err) { next(err); }
};

const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CategoryServices.getAllCategories();
    sendResponse(res, { statusCode: 200, success: true, message: "Categories fetched successfully", data: result });
  } catch (err) { next(err); }
};

export const CategoryControllers = { createCategory, getAllCategories };