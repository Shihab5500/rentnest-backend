import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getAllUsers = async () => {
  return await prisma.user.findMany({
    select: { id: true, name: true, email: true, role: true, status: true } // পাসওয়ার্ড ছাড়া বাকি সব দেখাবে
  });
};

const updateUserStatus = async (userId: string, status: string) => {
  return await prisma.user.update({
    where: { id: userId },
    data: { status } // status হবে BANNED বা ACTIVE
  });
};

export const AdminServices = { getAllUsers, updateUserStatus };