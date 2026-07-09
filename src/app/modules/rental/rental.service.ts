import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createRentalRequest = async (tenantId: string, payload: any) => {
  return await prisma.rentalRequest.create({
    data: {
      tenantId,
      propertyId: payload.propertyId,
    }
  });
};

const getMyRentalRequests = async (userId: string) => {
  return await prisma.rentalRequest.findMany({
    where: { tenantId: userId },
    include: { property: true }
  });
};

const updateRequestStatus = async (requestId: string, status: any) => {
  return await prisma.rentalRequest.update({
    where: { id: requestId },
    data: { status } // status হবে APPROVED বা REJECTED
  });
};

export const RentalServices = { createRentalRequest, getMyRentalRequests, updateRequestStatus };