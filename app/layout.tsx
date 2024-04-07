import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { appTheme } from '@/theme/AppTheme';
import Typography from '@mui/material/Typography';
import CustomToaster from '@/shared/components/CustomToaster';
import { StoreProvider } from './StoreProvider';
import Box from "@mui/material/Box";

export const metadata: Metadata = {
  title: "Kevin's Home",
  description: "Welcome to Kevin's home page!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  console.log('Root layout page');
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={ { enableCssLayer: false } }>
          <ThemeProvider theme={ appTheme }>
            <CssBaseline />
            <Typography variant="h1">
              <Link href="/">Home</Link>
            </Typography>
            <Box sx={ { display: 'flex' } } id="main-content">
              <StoreProvider>{ children }</StoreProvider>
            </Box>
            <CustomToaster />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
