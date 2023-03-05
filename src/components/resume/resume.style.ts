import { Box, Typography, ToggleButtonGroup, ToggleButton,Stack } from '@mui/material';
import { styled } from '@mui/system';

namespace S {
    export const ResumeContainer = styled(Box)({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        minHeight: "100vh"
    });

    export const ResumeTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.special,
        textAlign: 'center',
        fontWeight: 600,
        [theme.breakpoints.down('sm')]: {
            fontSize:"clamp(3vw,1rem,6vw)"
        }
    }));

    export const ResumeToggleBtnGrp = styled(ToggleButtonGroup)(({ theme }) => ({
        margin: "0 auto"
    }));

    export const ResumeToggleBtn = styled(ToggleButton)(({ theme }) => ({
        color: theme.palette.text.special,
        [theme.breakpoints.down('sm')]: {
            fontSize:"12px"
        }
    }));

    export const ResumeDetailsContainer = styled(Box)(({ theme }) => ({
        width: "6px",
        minHeight: "80vh",
        backgroundColor: theme.palette.custom.dark,
        position: "relative",
        padding: "5rem 0",
        borderRadius: '8px',
        [theme.breakpoints.down('sm')]: {
            position: "relative",
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "flex-start",
            height: "700px",
            padding: '0.5rem 0',
        }
    }));

    export const ResumeDetailsHand = styled(Box, { shouldForwardProp: prop => prop !== 'direction' && prop !== 'isSkill' })(({ direction,isSkill }: { direction: object,isSkill?:boolean }) => ({ theme }) => ({
        height: "6px",
        width: isSkill ? "100px" : "300px",
        backgroundColor: theme.palette.custom.dark,
        position: "absolute",
        borderRadius: '8px',
        ...direction,
        [theme.breakpoints.down('sm')]: {
            position: "relative",
            left: 'auto',
            right:'auto'
        }
    }));

    export const ResumeDetailsCard = styled(Box, { shouldForwardProp: prop => prop !== 'direction' && prop !== 'isSkill' })(({ direction,isSkill }: { direction: object,isSkill?:boolean }) => ({ theme }) => ({
        width: isSkill ? '300px' : "500px",
        height: isSkill ? "60px" : "250px",
        position: "absolute",
        display: 'flex',
        alignItems:'center',
        boxShadow: theme.palette.primaryShadow,
        backgroundColor: theme.palette.background,
        borderRadius: "10px",
        ...direction,
        [theme.breakpoints.down('sm')]: {
            position: "relative",
            width: '350px',
            height: isSkill ? "60px" : "180px"
        }
    }));

    export const MySkillComponentContainer = styled(Box)(({theme})=>({
        width:'55%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            alignItems: 'center',
        }
    }));

    export const MySkillIndividualContainer = styled(Stack)({
        alignItems: 'center',
        gap:'1rem'
    });

    export const MySkillTitle = styled(Typography)(({theme}) => ({
        color:theme.palette.text.primary,
        fontWeight:600
    }));
}

export default S;