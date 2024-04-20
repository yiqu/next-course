'use client';

import type { FirebaseQuote } from '@/shared/models/firebase.model';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Moment from 'react-moment';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFormState, useFormStatus } from 'react-dom';
import { deleteQuote } from '@/lib/quotes/quotes.actions';
import CircularProgress from "@mui/material/CircularProgress";

export default function Quote({ quote, index }: { quote: FirebaseQuote; index: number }) {
  //const deleteQuoteWithId = deleteQuote.bind(null, quote.id);

  const [state, deleteQuoteFormAction] = useFormState(deleteQuote, {
    status: '',
    message: '',
  });

  const errorMsg =
    state.message ?
      <Typography color="error" component="span">
        { state.message }
      </Typography>
    : null;

  return (
    <ListItem>
      <ListItemText
        primary={ `${index}: ${quote.quote}` }
        secondary={
          <Stack component="span" direction="row" justifyContent="start" alignItems="center" spacing={ 0.5 }>
            <Typography component="span">{ quote.author }</Typography> -
            <Typography component="span">
              <Moment fromNow date={ quote.date } />
              &nbsp;(
              <Moment format="MM/DD/YY hh:mm" date={ quote.date } />)
            </Typography>
            { errorMsg }
          </Stack>
        }
      />
      <form action={ deleteQuoteFormAction }>
        <input type="hidden" name="id" value={ quote.id } />
        <DeleteQuoteButton>
          <Button startIcon={ <DeleteIcon fontSize="small" /> } type="submit"></Button>
        </DeleteQuoteButton>
      </form>
    </ListItem>
  );
}

function DeleteQuoteButton({ children }: { children: React.ReactNode }) {
  const { pending, data, method, action } = useFormStatus();

  return (
    <Stack>
      { pending ?
        <CircularProgress size="12px" />
      : children }
    </Stack>
  );
}
