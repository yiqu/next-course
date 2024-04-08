import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import NewUserForm from './NewUserForm';
import UsersList from './UsersList';
import { Suspense } from 'react';
import Skeleton from '@mui/material/Skeleton';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function UsersPage() {
  return (
    <Box>
      <Stack direction="column" justifyContent="start" spacing={ 3 }>
        <NewUserForm />

        <div>
          <Suspense fallback={ <UsersListLoading /> }>
            <UsersList />
          </Suspense>
        </div>
      </Stack>
    </Box>
  );
}

function UsersListLoading() {
  return (
    <List>
      <ListItem>
        <Skeleton width="8rem" variant="rounded" />
      </ListItem>
      <ListItem>
        <Skeleton width="8rem" variant="rounded" />
      </ListItem>
      <ListItem>
        <Skeleton width="8rem" variant="rounded" />
      </ListItem>
      <ListItem>
        <Skeleton width="8rem" variant="rounded" />
      </ListItem>
    </List>
  );
}
