'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

/**
 * This is a client component, but it also uses a server component.
 * 
 * This is done because it is  not importing the "server" component directly, it is using the children paradigm.
 * 
 * 'use client' defines the boundary between server and client code on the module dependency tree, not the render tree.
 */

export default function TitleDisplay({ children }: { children?: React.ReactNode }) {
  console.log('hello from TitleDisplay');
  const [likes, setLikes] = useState<number>(0);

  const handleOnLikeClick = () => {
    setLikes((curr) => {
      return curr + 1;
    });
  };

  return (
    <Stack>
      <Box>
        <Button onClick={ handleOnLikeClick }>
          I like { children } ({ likes } liked this)
        </Button>
      </Box>
    </Stack>
  );
}
