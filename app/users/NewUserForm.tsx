'use client';

import { useFormState } from 'react-dom';
import Stack from '@mui/material/Stack';
import { addUser } from '@/lib/users/users.actions';
import TextField from '@mui/material/TextField';
import NewUserFormSubmit from './NewUserFormSubmit';
import Alert from '@mui/material/Alert';

export default function NewUserForm() {
  const [state, addUserFormAction] = useFormState(addUser, {
    status: '',
    message: '',
  });

  return (
    <Stack>
      { state.message && <Alert severity={ state.status as any }>{ state.message }</Alert> }
      <form action={ addUserFormAction }>
        <Stack spacing={ 2 }>
          <TextField id="standard-basic" label="User Email" variant="standard" name="email" />
          <TextField id="standard-basic" label="User Password" variant="standard" name="password" />

          <NewUserFormSubmit />
        </Stack>
      </form>
    </Stack>
  );
}
