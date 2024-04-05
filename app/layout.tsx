import type { Metadata } from "next";
import "./globals.css";
// import "./fonts.css";
import Link from "next/link";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { appTheme } from "@/theme/AppTheme";
import Typography from "@mui/material/Typography";
import { CustomToaster2 } from "@/shared/components/CustomToaster";
import Close from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import type { Toast } from "react-hot-toast";
import toast, { ToastBar } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Kevin's Home",
  description: "Welcome to Kevin's home page!",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={ { enableCssLayer: false } }>
          <ThemeProvider theme={ appTheme }>
            <CssBaseline />
            <Typography variant="h1">
              <Link href="/">
                Home
              </Link>
            </Typography>
            <div>
              { children }
            </div>
            <CustomToaster2 />

          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
