import { PaletteMode } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

export const getTheme = (mode: PaletteMode): ThemeOptions => {
  const isDark = mode === "dark";

  return {
    palette: {
      mode,
      primary: {
        main: isDark ? "#6366F1" : "#4F46E5",
        light: "#818CF8",
        dark: "#4338CA",
      },
      secondary: {
        main: isDark ? "#14B8A6" : "#0D9488",
      },
      background: {
        default: isDark ? "#07090E" : "#F8FAFC",
        paper: isDark ? "rgba(17, 24, 39, 0.72)" : "rgba(255, 255, 255, 0.85)",
      },
      text: {
        primary: isDark ? "#F8FAFC" : "#0F172A",
        secondary: isDark ? "#94A3B8" : "#475569",
        special: isDark ? "#818CF8" : "#4F46E5",
      } as any,
      custom: {
        main: isDark ? "#6366F1" : "#4F46E5",
        dark: isDark ? "#1E293B" : "#E2E8F0",
        transparentTheme: isDark ? "rgba(15, 23, 42, 0.75)" : "rgba(255, 255, 255, 0.80)",
      },
      btnShadow: isDark
        ? "0 8px 24px -4px rgba(99, 102, 241, 0.25)"
        : "0 8px 20px -4px rgba(79, 70, 229, 0.18)",
      primaryShadow: isDark
        ? "0 20px 40px -15px rgba(0, 0, 0, 0.6)"
        : "0 20px 40px -15px rgba(15, 23, 42, 0.08)",
    } as any,
    typography: {
      fontFamily: '"Inter", sans-serif',
      h1: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 800,
        letterSpacing: "-0.03em",
        lineHeight: 1.1,
      },
      h2: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 800,
        letterSpacing: "-0.025em",
      },
      h3: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 700,
        letterSpacing: "-0.02em",
      },
    },
    shape: {
      borderRadius: 18,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: isDark ? "#07090E" : "#F8FAFC",
            backgroundImage: isDark
              ? "radial-gradient(at 15% 15%, rgba(99, 102, 241, 0.15) 0px, transparent 45%), radial-gradient(at 85% 20%, rgba(20, 184, 166, 0.10) 0px, transparent 45%)"
              : "radial-gradient(at 15% 15%, rgba(99, 102, 241, 0.08) 0px, transparent 45%), radial-gradient(at 85% 20%, rgba(20, 184, 166, 0.06) 0px, transparent 45%)",
            backgroundAttachment: "fixed",
            color: isDark ? "#F8FAFC" : "#0F172A",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backdropFilter: "blur(16px)",
            border: isDark
              ? "1px solid rgba(255, 255, 255, 0.08)"
              : "1px solid rgba(15, 23, 42, 0.08)",
            backgroundImage: "none",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "12px",
          },
        },
      },
    },
  };
};
