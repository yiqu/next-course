'use client';

import { useFormState, useFormStatus } from 'react-dom';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { addQuote } from '@/lib/quotes/quotes.actions';
import Typography from '@mui/material/Typography';

export default function NewQuoteForm() {
  const [state, addQuoteFormAction] = useFormState(addQuote, {
    status: '',
    message: '',
    payload: null,
  });

  return (
    <Stack>
      { state.message && <Alert severity={ state.status as any }>{ state.message }</Alert> }
      <form action={ addQuoteFormAction }>
        <Stack spacing={ 2 }>
          <TextField id="standard-basic" label="Author" variant="standard" name="author" />
          <TextField id="standard-basic" label="Quote" variant="standard" name="quote" />

          <AddQuoteButton />
        </Stack>
      </form>
    </Stack>
  );
}

function AddQuoteButton() {
  const { pending, data, method, action } = useFormStatus();

  return (
    <Stack>
      { pending && <Typography>Adding quote...</Typography> }
      <Button type="submit" aria-disabled={ pending } variant="outlined">
        { pending ? 'Submitting...' : 'Submit' }
      </Button>
    </Stack>
  );
}
