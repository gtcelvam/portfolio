import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeMode = "dark" | "light";

export type ThemeStateType = {
  theme: ThemeMode;
  navActive: string;
};

const getInitialTheme = (): ThemeMode => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("portfolio_theme") as ThemeMode | null;
    if (saved === "dark" || saved === "light") return saved;
  }
  return "dark";
};

const initialState: ThemeStateType = {
  theme: getInitialTheme(),
  navActive: "home",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.theme = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("portfolio_theme", action.payload);
      }
    },
    setNavActive: (state, action: PayloadAction<string>) => {
      state.navActive = action.payload;
    },
  },
});

export const { setTheme, setNavActive } = themeSlice.actions;
export default themeSlice.reducer;
