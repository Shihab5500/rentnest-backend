import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const registerUser = async (payload: any) => {
  // পাসওয়ার্ড সিকিউর (hash) করা
  const hashedPassword = await bcrypt.hash(payload.password, 12);
  
  // ডাটাবেসে ইউজার সেভ করা
  const result = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      role: payload.role,
    },
  });

  // রেসপন্সে পাসওয়ার্ড যেন না যায় তাই পাসওয়ার্ড বাদ দিয়ে বাকি ডাটা রিটার্ন করা
  const { password, ...userWithoutPassword } = result;
  return userWithoutPassword;
};

export const AuthServices = {
  registerUser,
};