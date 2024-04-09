import { Prisma } from '@prisma/client';
import prisma from '../db';

export async function getAllUsers() {

  try {
    const res = await prisma.user.findMany();
    return {
      data: res,
      status: 'success',
      date: Date.now(),
    };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      return {
        status: 'error',
        message: `Error ${e.code}. Prisma error: ${e.message}`,
      };
    }
    return {
      status: 'error',
      message: 'Error fetching users. Please try again.',
    };
  }
}
