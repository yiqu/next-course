'use client';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ServerOrClientComponent1 from '../example-client-or-server-components/ServerOrClientComponent1';

/**
 * 
 *  Note: <ServerOrClientComponent1 /> is now a client component because it is being imported in a client component.
 *  It is not about where the component is declared or used, but where it is imported.
 * 
 * 
 * @returns 
 */
export default function ClientComponent1() {
  console.log('hello from client 1');
  return (
    <Stack>
      <Typography>Client Component 1</Typography>

      <ServerOrClientComponent1 />
    </Stack>
  );
}
