import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

namespace S {
    export const HeaderContainer = styled(Box)(({ theme }) => ({
        color: theme.palette.text.primary,
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between",
    }));

    export const Name = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.primary,
    }))

    export const NavUnorderList = styled("ul")(({ theme }) => ({
        listStyleType: 'none',
        width: "30%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }));

    export const NavListItem = styled('li')(({ theme }) => ({
        cursor: "pointer"
    }));

    export const ThemeSwitcherContainer = styled(Box)(({ }) => ({
        padding: "1%"
    }))
}

export default S