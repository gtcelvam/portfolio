import { styled } from '@mui/system';
import { Button } from '@mui/material';

namespace S {
    export const IconButton = styled(Button)(({ theme }) => ({
        backgroundColor: 'transparent',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.text.special,
        width: "40px",
        height: "40px",
        borderRadius: "5px",
        boxShadow: theme.palette.btnShadow,
    }));
}

export default S;