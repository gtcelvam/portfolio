import {styled} from '@mui/system';
import {Box} from "@mui/material";

namespace S{
    export const HomeContainer = styled(Box)(({theme})=>({
        backgroundColor:theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between"
    }));
}

export default S