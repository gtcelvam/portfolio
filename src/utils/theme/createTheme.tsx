import { grey, blue, green } from "@mui/material/colors";
import { dark, light } from "./customColors";
import { PaletteMode } from "@mui/material";

export const getTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: light,
          divider: light[500],
          text: {
            primary: grey[900],
            secondary: grey[800],
            special: "#C70039",
          },
          custom: {
            dark: "#7B1830",
            transparentTheme: "#FAFAFA90",
          },
          background: "#ffffff",
          btnShadow: "0px 1px 5px 1px rgba(222,222,222,1);",
          primaryShadow: "5px 7px 15px 6px rgba(117,117,117,0.23);",
          transparentTheme: dark.primary.transparent,
        }
      : {
          // palette values for dark mode
          primary: dark,
          divider: dark[500],
          text: {
            primary: "#fff",
            secondary: grey[500],
            special: "#0034B8",
          },
          custom: {
            dark: "#050E25",
            transparentTheme: "#00000090",
          },
          background: "#212428",
          btnShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;",
          primaryShadow: "5px 7px 15px 6px rgba(16,27,36,1);",
          transparentTheme: light.primary.transparent,
        }),
  },
});
