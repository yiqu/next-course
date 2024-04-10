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
    <div>
      <Stack>
        <Link href="/quotes">Quotes</Link>
        { children }
      </Stack>
    </div>
  );
}
