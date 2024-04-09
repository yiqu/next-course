'use server';

import { z } from 'zod';
import { newUserSchema } from '../data-schemas/user.schema';
import prisma from '../db';
import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export async function addUser(prevState: any, formData: FormData) {
  try {
    const data = newUserSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    const res = await prisma.user.create({
      data: data,
    });

    //revalidatePath('/users', 'layout');
    
    return {
      status: 'success',
      message: `User ${res.email} added successfully.`,
      data: res,
    };
  } catch (e) {
    if (e instanceof z.ZodError) {
      return {
        status: 'error',
        message: `Input error: ${e.issues.map((issue) => issue.message).join(', ')}`,
      };
    }
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      return {
        status: 'error',
        message: `Error ${e.code}. Prisma error: ${e.message}`,
      };
    }
    return {
      status: 'error',
      message: 'Error adding user. Please try again.',
    };
  }
}
