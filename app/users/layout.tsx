import Link from 'next/link';
import type { Metadata } from 'next/types';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const metadata: Metadata = {
  title: "Kevin's Home",
  description: "Welcome to Kevin's home page!",
};

export default function UsersLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box>
      <Typography>Users Database</Typography>
      <Box>
        <Link href={ `/users` }>All Users</Link>
      </Box>
      { children }
    </Box>
  );
}

