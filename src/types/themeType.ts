import {Palette} from '@mui/material/styles'

declare module "@mui/material/colors" {
  interface ColorPalette {
    dark: {
      500: string;
      primary: {
        main: string;
      }
    };
    light: {
      500: string;
      primary: {
        main: string;
      }
    };
  }
}

declare module "@mui/material" {
  interface Palette {
    custom: {
      main: string;
      dark: string;
      transparentTheme: string;
    };
  }
}

declare module "@mui/material" {
  interface PaletteOptions {
    custom: {
      main: string;
      dark: string;
      transparentTheme: string;
    };
  }
}
