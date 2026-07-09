import { Request, Response, NextFunction } from 'express';
import { AuthServices } from './auth.service';

const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthServices.registerUser(req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "User registered successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthServices.loginUser(req.body);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User logged in successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AuthControllers = {
  registerUser,
  loginUser,
};