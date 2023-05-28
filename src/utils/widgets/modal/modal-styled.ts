import { Dialog } from "@mui/material";
import { styled } from "@mui/system";
import { CSSProperties } from "react";

namespace S {
  export const ModalContainer = styled(Dialog, {
    shouldForwardProp: (prop) => prop !== "customStyles",
  })(({ customStyles }: { customStyles?: CSSProperties }) => ({ theme }) => ({
    "&.MuiDialog-root": {
      background: `${theme.palette.background}90`,
    },
    ".MuiPaper-root": {
      background: theme.palette.background,
      borderRadius: "0.5rem",
      ...customStyles,
    },
  }));
}

export default S;
