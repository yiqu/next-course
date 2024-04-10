'use client';

import type { FirebaseQuote } from '@/shared/models/firebase.model';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Moment from 'react-moment';

export default function Quote({ quote }: { quote: FirebaseQuote }) {

  return (
    <ListItem>
      <ListItemText
        primary={ quote.quote }
        secondary={
          <Stack component="span" direction="row" justifyContent="start" alignItems="center" spacing={ 0.5 }>
            <Typography component="span">{ quote.author }</Typography> -
            <Typography component="span">
              <Moment fromNow date={ quote.date } />
              &nbsp;(<Moment format="MM/DD/YY hh:mm" date={ quote.date } />)
            </Typography>
          </Stack>
        }
      />
    </ListItem>
  );
}
