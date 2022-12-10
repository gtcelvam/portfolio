import {styled} from "@mui/system";
import {Box} from "@mui/material";

namespace S{
    export const HeaderContainer = styled(Box)(({theme})=>({
        color: theme.palette.text.primary,
        width:"100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between"
    }));
}

export default S