import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // রিকোয়েস্টের ডাটা Zod স্কিমা দিয়ে চেক করা
      await schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (error) {
      next(error); // ভুল ডাটা দিলে গ্লোবাল এরর হ্যান্ডলারে পাঠিয়ে দেবে
    }
  };
};

export default validateRequest;