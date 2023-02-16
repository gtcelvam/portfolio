import { MouseEvent, useState } from 'react';
import ResumeCard from '../../utils/widgets/resumeCard';
import S from './resume.style'

const ResumeSection = () => {
    //state values
    const [resumeToggle, setResumeToggle] = useState('education');

    //functions
    const handleToggleChange = (
        event: MouseEvent<HTMLElement>,
        toggleValue: string,
    ) => {
        setResumeToggle(toggleValue);
    };

    return (
        <S.ResumeContainer>
            <S.ResumeTitle variant='h2'>My Resume</S.ResumeTitle>
            <S.ResumeToggleBtnGrp value={resumeToggle} onChange={handleToggleChange} exclusive aria-label="Large sizes">
                <S.ResumeToggleBtn value='education'>Education</S.ResumeToggleBtn>
                <S.ResumeToggleBtn value='professional-skills'>Professional Skills</S.ResumeToggleBtn>
                <S.ResumeToggleBtn value='experience'>Experience</S.ResumeToggleBtn>
            </S.ResumeToggleBtnGrp>
            <S.ResumeDetailsContainer>
                <S.ResumeDetailsHand direction={{ top: "25%", right: 0 }}>
                    <S.ResumeDetailsCard direction={{
                        top: "50%",
                        left: "-50%",
                        transform: "translate(-50%, -50%)",
                    }}>
                        <ResumeCard />
                    </S.ResumeDetailsCard>
                </S.ResumeDetailsHand>
                <S.ResumeDetailsHand direction={{ top: "50%", left: 0 }}>
                    <S.ResumeDetailsCard direction={{
                        top: "50%",
                        right: "50%",
                        transform: "translate(100%, -50%)",
                    }}>
                        <ResumeCard />
                    </S.ResumeDetailsCard>
                </S.ResumeDetailsHand>
                <S.ResumeDetailsHand direction={{ top: "75%", right: 0 }}>
                    <S.ResumeDetailsCard direction={{
                        top: "50%",
                        left: "-50%",
                        transform: "translate(-50%, -50%)",
                    }}>
                        <ResumeCard />
                    </S.ResumeDetailsCard>
                </S.ResumeDetailsHand>
            </S.ResumeDetailsContainer>
        </S.ResumeContainer>
    )
}

export default ResumeSection;