import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const auth = (...requiredRoles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new Error('You are not authorized!');
      }

      // টোকেন ভেরিফাই করা
      const verifiedUser = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as JwtPayload;

      // রোল চেক করা
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new Error('You are not authorized to access this route!');
      }

      req.user = verifiedUser; // ইউজারের তথ্য রিকোয়েস্টে সেভ করে রাখা
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;