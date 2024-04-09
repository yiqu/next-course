'use client';

import { revalidateByPath } from '@/lib/cache/revalidate';
import Button from '@mui/material/Button';

export default function RefreshUsers() {
  const handleRefreshCache = () => {
    revalidateByPath('/users');
  };

  return (
    <Button variant="outlined" onClick={ handleRefreshCache }>
      Refresh Users Cache
    </Button>
  );
}
