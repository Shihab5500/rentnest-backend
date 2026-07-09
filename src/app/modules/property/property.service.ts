import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createProperty = async (landlordId: string, payload: any) => {
  return await prisma.property.create({
    data: { ...payload, landlordId },
  });
};

const getAllProperties = async () => {
  return await prisma.property.findMany({
    include: { category: true, landlord: { select: { id: true, name: true, email: true } } }
  });
};

export const PropertyServices = { createProperty, getAllProperties };