import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';


namespace S{
    export const SkillCardContainer = styled(Box)(({ theme }) => ({
        width:"100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:theme.spacing(1)
    }));

    export const SkillCardMainTitle = styled(Typography)(({theme}) => ({
        fontWeight: 600,
        color:theme.palette.text.primary,
    }));

    export const SkillCardLogoContainer = styled(Box)(({
        width: "30px",
        height:"100%"
    }));

    export const SkillCardLogo = styled('img')({
        width: "100%",
        height: "100%"
    });
}

export default S;