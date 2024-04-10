'use server';
import { z } from 'zod';
import type { QuotePost } from '@/shared/models/firebase.model';
import { KQFIREBASEURL } from '@/app/shared/constants';
import type { FormActionState } from '@/shared/models/form-action.model';

export async function addQuote(prevState: FormActionState<{name: string}>, formData: FormData) {
  const rawFormData = {
    author: formData.get('author') as string | null,
    date: Date.now(),
    quote: formData.get('quote') as string | null,
  };

  try {
    const validatedFormData: QuotePost = quoteSchema.parse(rawFormData);

    const response = await fetch(`${KQFIREBASEURL}/quote-list.json`, {
      method: 'POST',
      body: JSON.stringify(validatedFormData),
    });
    const result = await response.json();

    return {
      status: 'success',
      message: 'Quote added successfully',
      payload: result,
    };
  } catch (e) {
    if (e instanceof z.ZodError) {
      return {
        status: 'error',
        message: `Input error: ${e.issues.map((issue) => issue.message).join(', ')}`,
        payload: null,
      };
    }

    return {
      status: 'error',
      message: `Error: ${e}`,
      payload: null,
    };
  }
}

const quoteSchema = z.object({
  author: z.string().min(1),
  date: z.number(),
  quote: z.string().min(1),
});
