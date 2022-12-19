import { amber, deepOrange, green, grey, purple } from '@mui/material/colors';
import { PaletteMode } from "@mui/material";

export const getTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          background:"white"
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
          background:"#212428"
        }),
  },
});

