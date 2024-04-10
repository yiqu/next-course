import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import type { PageSearchParams } from '../shared/models/ConventionModels';
import QuotesList from './QuotesList';
import { Suspense } from 'react';
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function QuotesPage({ params, searchParams }: { params: QuotesPageParams; searchParams: PageSearchParams }) {
  return (
    <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 3 }>
      <Typography>All Quotes</Typography>
      <Suspense fallback={ <Box><Skeleton width="10rem" /></Box> }>
        <QuotesList />
      </Suspense>
    </Stack>
  );
}

export default QuotesPage;

interface QuotesPageParams {
  quoteId: string;
}
