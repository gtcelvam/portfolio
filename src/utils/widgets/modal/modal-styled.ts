import { Dialog } from "@mui/material";
import { styled } from "@mui/system";
import { CSSProperties } from "react";

namespace S {
  export const ModalContainer = styled(Dialog, {
    shouldForwardProp: (prop) => prop !== "customStyles",
  })(({ customStyles }: { customStyles?: CSSProperties }) => ({ theme }) => ({
    ".MuiPaper-root": {
      backgroundColor: theme.palette.background.default,
      borderRadius: "20px",
      border:
        theme.palette.mode === "dark"
          ? "1px solid rgba(255,255,255,0.12)"
          : "1px solid rgba(15,23,42,0.12)",
      ...customStyles,
    },
  }));
}

export default S;
