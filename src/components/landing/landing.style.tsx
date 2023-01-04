import { styled } from '@mui/system';
import { Box, Typography } from "@mui/material";

namespace S {
    export const LandingSection = styled(Box)(({ theme }) => ({
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }));

    export const LandingLeftContainer = styled(Box)(({
        flex: 1,
        height: "100%",
        // border: "1px solid red"
    }));

    export const LandingLeftTopSection = styled(Box)(({
        height: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "1rem",
        // border: "1px solid blue"
    }));

    export const LandingLeftBottomSection = styled(Box)(({
        height: "40%",
        display: "flex",
        alignItems: "center",
        justifyContet: "center",
        // border: "1px solid blue"
    }));

    export const WelcomeText = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.primary
    }));

    export const GeneralHeadText = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.primary,
        fontSize: "4.5rem"
    }));

    export const GeneralDescText = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.primary
    }));

    export const SpecialText = styled("span")(({ theme }) => ({
        color: theme.palette.text.special
    }));

    export const LandingLeftBottomContentContainer = styled(Box)(({
        flex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "1rem",
        // border: "1px solid yellow"
    }));

    export const LandingWidgetTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.primary
    }));

    export const LandingWidgetBtnContainer = styled(Box)(({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem"
    }));

    export const LandingRightContainer = styled(Box)(({
        flex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // border: "1px solid red",
    }));

    export const LandingImageContainer = styled(Box)(({ theme }) => ({
        width: "60%",
        height: "80%",
        boxShadow: theme.palette.primaryShadow,
        borderRadius: "1rem"
    }));
}

export default S;