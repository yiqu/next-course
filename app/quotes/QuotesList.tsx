import List from '@mui/material/List';
import { KQFIREBASEURL } from '../shared/constants';
import type { IFirebaseData, FirebaseQuote } from '@/shared/models/firebase.model';
import Quote from './Quote';
import Stack from '@mui/material/Stack';

export default async function QuotesList() {
  //sleep
  //await new Promise((resolve) => setTimeout(resolve, 3000));

  const quotes: IFirebaseData<FirebaseQuote> = await fetch(`${KQFIREBASEURL}/quote-list.json`, {
    next: { tags: ['quotes-all'] },
  }).then((res) => res.json());

  const quotesList: FirebaseQuote[] = Object.keys(quotes)
    .map((fireKey) => {
      return {
        ...quotes[fireKey],
        id: fireKey,
      };
    })
    .sort((a, b) => b.date - a.date);

  return (
    <Stack direction="column" spacing={ 3 }>
      <List sx={ { maxWidth: '30rem' } }>
        { quotesList.map((quote) => {
          return <Quote key={ quote.id } quote={ quote } />;
        }) }
      </List>
    </Stack>
  );
}
