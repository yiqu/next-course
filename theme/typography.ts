import { DefaultSans } from "@/fonts/default-sans";
import { DefaultSansDisplay } from "@/fonts/default-sans-display";
import { DefaultSansText } from "@/fonts/default-sans-text";
import type { Palette } from "@mui/material/styles";
import type { TypographyOptions } from "@mui/material/styles/createTypography";

export const APP_BODY_COLOR = "#202124";
export const APP_TEXT_COLOR = "#222";
export const APP_HEADER_COLOR = "#1f1f1f";
export const GREY_TEXT = "#5e5e5e";

declare module '@mui/material/styles' {
  interface TypographyVariants {
    italic0: React.CSSProperties;
    italic1: React.CSSProperties;
    italic2: React.CSSProperties;
    body0: React.CSSProperties;
    subtitle0: React.CSSProperties;
  }
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    italic0?: React.CSSProperties;
    italic1?: React.CSSProperties;
    italic2?: React.CSSProperties;
    body0?: React.CSSProperties;
    subtitle0?: React.CSSProperties;
  }
}
// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    italic0: true;
    italic1: true;
    italic2: true;
    body0: true;
    subtitle0: false;
  }
}

export const MyTypography: TypographyOptions | ((palette: Palette) => TypographyOptions) | undefined = {
  fontFamily: DefaultSansText.style.fontFamily,
  fontSize: 14,

  subtitle0: {
    fontWeight: "normal",
    fontSize: '10px',
    color: GREY_TEXT
  },
  subtitle1: {
    fontWeight: "normal",
    fontSize: '12px',
    color: GREY_TEXT
  },
  subtitle2: {
    fontWeight: "normal",
    fontSize: '14px',
    color: GREY_TEXT
  },

  italic0: {
    fontSize: '12px',
    fontStyle: 'italic',
    color: APP_TEXT_COLOR
  },
  italic1: {
    fontSize: '14px',
    fontStyle: 'italic',
    color: APP_TEXT_COLOR
  },
  italic2: {
    fontSize: '16px',
    fontStyle: 'italic',
    color: APP_TEXT_COLOR
  },

  body0: {
    fontSize: '12px',
  },
  body1: {
    fontSize: '14px',
  },
  body2: {
    fontSize: '16px',
  },

  caption: {
    fontSize: '12px',
    color: GREY_TEXT
  },

  h1: {
    fontFamily: DefaultSansDisplay.style.fontFamily,
    fontSize: '28px',
    color: APP_HEADER_COLOR
  },
  h2: {
    fontFamily: DefaultSansDisplay.style.fontFamily,
    fontSize: '26px',
    fontWeight: 500,
    color: APP_HEADER_COLOR
  },
  h3: {
    fontFamily: DefaultSansDisplay.style.fontFamily,
    fontSize: '22px',
    fontWeight: 500,
    color: APP_HEADER_COLOR
  },
  h4: {
    fontFamily: DefaultSans.style.fontFamily,
    fontSize: '20px',
    color: APP_HEADER_COLOR
  },
  h5: {
    fontFamily: DefaultSans.style.fontFamily,
    fontSize: '18px',
    color: APP_HEADER_COLOR
  },
  h6: {
    fontFamily: DefaultSans.style.fontFamily,
    fontSize: '16px',
    color: APP_HEADER_COLOR
  }
};

export const ELLIPIS_STYLE = {
  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
};