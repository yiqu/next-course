'use client';

import { useFormState, useFormStatus } from 'react-dom';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { addQuote } from '@/lib/quotes/quotes.actions';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import type { QuotePostForm } from '@/shared/models/firebase.model';
import HFTextField from '../shared/forms/hook-forms/TextField';
import { useCallback } from 'react';

export default function NewQuoteForm() {
  const { control, setValue } = useForm<QuotePostForm>({
    defaultValues: getInitFormValue(),
    shouldFocusError: true,
    //resolver: yupResolver(productSchema),
    //mode: "onChange",
  });

  const [state, addQuoteFormAction] = useFormState(addQuote, {
    status: '',
    message: '',
    payload: null,
    addedDate: 0,
  });

  const handleClearField = useCallback(
    (name: any) => {
      if (name) {
        setValue(name, '');
      }
    },
    [setValue],
  );

  return (
    <Stack p={ 3 } border="1px solid #eee">
      { state.message && <Alert severity={ state.status as any }>{ state.message }</Alert> }
      <form action={ addQuoteFormAction }>
        <Stack spacing={ 2 }>
          <HFTextField
            name="author"
            label="Author"
            control={ control }
            variant="standard"
            type="text"
            fullWidth
            clearField={ handleClearField }
            onFocus={ (event) => {
              event.target.select();
            } }
          />
          <HFTextField
            name="quote"
            label="Quote"
            control={ control }
            variant="standard"
            type="text"
            fullWidth
            clearField={ handleClearField }
            helperText="At least 1 character long."
          />

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
      <Button type="submit" aria-disabled={ pending } variant="outlined">
        { pending ? 'Submitting...' : 'Submit' }
      </Button>
      { pending && <Typography>Adding quote...</Typography> }
    </Stack>
  );
}

function getInitFormValue(initValue?: QuotePostForm): QuotePostForm {
  return {
    author: '',
    quote: '',
    ...initValue,
  };
}
