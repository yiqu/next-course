'use client';

import Button from '@mui/material/Button';
import { revalidatePath } from 'next/cache';

export default function RefreshUsers() {
  const handleRefreshCache = () => {
    revalidatePath('/users', 'layout');
  };

  return (
    <Button variant="outlined" onClick={ handleRefreshCache }>
      Refresh Users Cache
    </Button>
  );
}
