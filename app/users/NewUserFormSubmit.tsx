import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useFormStatus } from 'react-dom';

export default function NewUserFormSubmit() {
  const { pending, data, method, action } = useFormStatus();
  const email =(data?.get('email') as string) || '';

  return (
    <Stack>
      { pending && <Typography>Adding user { email }...</Typography> }
      <Button type="submit" aria-disabled={ pending } variant="outlined">
        { pending ? 'Submitting...' : 'Submit' }
      </Button>
    </Stack>
  );
}
