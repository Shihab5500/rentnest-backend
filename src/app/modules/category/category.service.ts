import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createCategory = async (payload: any) => {
  return await prisma.category.create({ data: payload });
};

const getAllCategories = async () => {
  return await prisma.category.findMany();
};

export const CategoryServices = { createCategory, getAllCategories };