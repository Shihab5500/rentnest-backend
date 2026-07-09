import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-10-16' as any,
});

const createPaymentIntent = async (rentalRequestId: string) => {
  // ১. Rental request খুঁজে বের করা এবং প্রপার্টির দাম জানা
  const rentalRequest = await prisma.rentalRequest.findUnique({
    where: { id: rentalRequestId },
    include: { property: true },
  });

  if (!rentalRequest) {
    throw new Error('Rental request not found!');
  }

  // ২. Amount-কে cents এ কনভার্ট করা (Stripe সবসময় cents এ হিসাব করে)
  const amount = Math.round(rentalRequest.property.price * 100);

  // ৩. Stripe এ Payment Intent তৈরি করা
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'usd',
    payment_method_types: ['card'],
  });

  // ৪. ক্লায়েন্টকে পেমেন্ট সিক্রেট পাঠানো
  return {
    clientSecret: paymentIntent.client_secret,
    amount: rentalRequest.property.price,
  };
};

export const PaymentServices = {
  createPaymentIntent,
};