import { amber, deepOrange, grey } from '@mui/material/colors';
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
          special: "#ff014f"

        },
        background: "white",
        btnShadow: "10px 10px 19px #c7c7c7, -10px -10px 19px #ffffff;",
        primaryShadow: " 0px 0px 20px -7px rgba(18,18,18,1);"
      }
      : {
        // palette values for dark mode
        primary: deepOrange,
        divider: deepOrange[700],
        text: {
          primary: '#fff',
          secondary: grey[500],
          special: "#003D7A"
        },
        background: "#212428",
        btnShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;",
        primaryShadow: " 0px 0px 20px -7px rgba(122,121,122,1);"
      }),
  },
});

