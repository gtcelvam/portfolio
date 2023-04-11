import { styled, Box } from "@mui/material";

namespace S {
  export const LayoutContainer = styled(Box)(() => ({
    width: "100%",
    height: "100%",
  }));

  export const ProfileImage = styled('img')({
    width: 100,
    height:"auto"
  })
}

export default S;
