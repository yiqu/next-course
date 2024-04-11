import Stack from '@mui/material/Stack';
import Link from 'next/link';
import type { Metadata } from 'next/types';

export const revalidate = 10;

export const metadata: Metadata = {
  title: 'Quotes List',
  description: 'Quotes!',
};

export default function QuotesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Stack width="100%">
      <Link href="/quotes">Quotes</Link>
      <Stack direction="column" width="100%">
        { children }
      </Stack>
    </Stack>
  );
}
