import { styled } from "@mui/system";
import { Button } from "@mui/material";

namespace S {
  export const IconButton = styled(Button)(({ theme }) => ({
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "5px",
    boxShadow: theme.palette.btnShadow,
    a: {
      color: theme.palette.text.special,
    },
  }));
}

export default S;
