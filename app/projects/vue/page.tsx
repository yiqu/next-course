import Box from '@mui/material/Box';
import TitleDisplay from './TitleDisplay';
import TitleName from './TitleName';
import LoadingBar from '@/shared/components/loading/Loading';
import { Suspense } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function Projects() {
  return (
    <Stack direction="column" justifyContent="start" spacing={ 2 }>
      <Typography variant="h5">Using a Server Component within a Client Component</Typography>
      <Box>
        { /* a client component */ }
        <TitleDisplay>
          <Suspense fallback={ <LoadingBar /> }>
            <div className="mx-1">
              { /* a server component */ }
              <TitleName />
            </div>
          </Suspense>
        </TitleDisplay>
      </Box>
    </Stack>
  );
}

export default Projects;
