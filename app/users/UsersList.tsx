import { getAllUsers } from '@/lib/users/users.server';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';

export default async function UsersList() {
  const users = await getAllUsers();

  if (!users.data) {
    return null;
  }

  return (
    <Stack>
      <List>
        { users.data.map((user) => {
          return <ListItem key={ user.id }>{ user.email }</ListItem>;
        }) }
      </List>
    </Stack>
  );
}
