'use client';

import type { PaletteMode, ThemeOptions } from '@mui/material';
import { MyComponents } from './components';
import { MyPaletteOptions } from './palette';
import { MyTypography } from './typography';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export const getMyTheme = (mode: PaletteMode): ThemeOptions => {
  return {
    typography: MyTypography,
    palette: {
      mode,
      ...(
        mode === 'light' ? { ...MyPaletteOptions } : {}
      )
    },
    components: {
      ...MyComponents,
      ...(
        mode === 'light' ? {} : {}
      ),
    },
  };
};


export const appTheme = createTheme({
  palette: {
    mode: 'light',
    ...MyPaletteOptions
  },
  typography: MyTypography,
  components: {
    ...MyComponents,
  },
});