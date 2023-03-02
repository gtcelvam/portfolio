import { useState,useEffect,useRef,MouseEvent } from "react";
import { useDispatch } from "react-redux";
import {
  EducationDetails,
  Experience,
  FrontEndSkills,
  BackEndSkills,
} from "../../utils/constants";
import { ScrollObserver } from "../../utils/helpers";
import ResumeCard from "../../utils/widgets/resumeCard";
import SkillCard from "../../utils/widgets/skillsCard";
import useMediaQuery from '@mui/material/useMediaQuery';
import S from "./resume.style";
import { Theme } from "@mui/material/styles";

const ResumeSection = () => {
  //constructor
  const dispatch = useDispatch();

  //state values
  const [resumeToggle, setResumeToggle] = useState("education");
  const resumeRef = useRef(null);

  //constant
  const isMobileView = useMediaQuery((theme:Theme) => theme.breakpoints.down('sm'));

  useEffect(() => {
    if (resumeRef.current) {
      ScrollObserver(resumeRef.current, "resume", dispatch);
    }
  }, []);

  //functions
  const getResumeCardStyle = (isSkill?: boolean) => ({
    0: {
      top: isMobileView ? "0" : "50%",
      left: isMobileView ? `${isSkill ? "-125%" : "-9%"}` : "-50%",
      transform: isMobileView ? 'translate(0%,0%)' : `translate(${isSkill ? "-70%" : "-50%"}, -50%)`,
    },
    1: {
      top: isMobileView ? "0" : "50%",
      right: isMobileView ? `${isSkill ? "125%" : "9%"}` : "50%",
      transform: isMobileView ? 'translate(0%,0%)' : "translate(100%, -50%)",
    },
  });

  const handleToggleChange = (
    event: MouseEvent<HTMLElement>,
    toggleValue: string
  ) => {
    setResumeToggle(toggleValue);
  };

  type resumeHandType = {
    [key: number]: { top: string; right?: number; left?: number };
  };

  const getResumeHandStyle: (
    len: number,
    isSkill?: boolean
  ) => resumeHandType = (len: number, isSkill = false) => {
    let handData: resumeHandType = {};
    var i = 0;
    while (i <= len) {
      handData[i] = {
        top:isMobileView ? `${i * (isSkill ? 10 : 30)}%` :  `${(i + 1) * (isSkill ? 10 : 25)}%`,
        [i % 2 === 0 ? "right" : "left"]: 0,
      };
      i++;
    }
    return handData;
  };

  return (
    <S.ResumeContainer id='resume' ref={resumeRef}>
      <S.ResumeTitle variant="h2">My Resume</S.ResumeTitle>
      <S.ResumeToggleBtnGrp
        value={resumeToggle}
        onChange={handleToggleChange}
        exclusive
        aria-label="Large sizes"
      >
        <S.ResumeToggleBtn value="education">Education</S.ResumeToggleBtn>
        <S.ResumeToggleBtn value="professional-skills">
          Professional Skills
        </S.ResumeToggleBtn>
        <S.ResumeToggleBtn value="experience">Experience</S.ResumeToggleBtn>
      </S.ResumeToggleBtnGrp>
      {resumeToggle !== "professional-skills" && (
        <S.ResumeDetailsContainer>
          {resumeToggle === "education"
            ? EducationDetails.map((data, i) => (
                <S.ResumeDetailsHand
                  key={data.id}
                  direction={getResumeHandStyle(EducationDetails.length)[i]}
                >
                  <S.ResumeDetailsCard
                    direction={
                      i % 2 === 0
                        ? getResumeCardStyle()[0]
                        : getResumeCardStyle()[1]
                    }
                  >
                    <ResumeCard data={data} />
                  </S.ResumeDetailsCard>
                </S.ResumeDetailsHand>
              ))
            : resumeToggle === "experience"
            ? Experience.map((data, i) => (
                <S.ResumeDetailsHand
                  key={data.id}
                  direction={getResumeHandStyle(Experience.length)[i]}
                >
                  <S.ResumeDetailsCard
                    direction={
                      i % 2 === 0
                        ? getResumeCardStyle()[0]
                        : getResumeCardStyle()[1]
                    }
                  >
                    <ResumeCard data={data} />
                  </S.ResumeDetailsCard>
                </S.ResumeDetailsHand>
              ))
            : ""}
        </S.ResumeDetailsContainer>
      )}
      {resumeToggle === "professional-skills" && (
        <S.MySkillComponentContainer>
          <S.MySkillIndividualContainer>
            <S.MySkillTitle>Front End</S.MySkillTitle>
            <S.ResumeDetailsContainer>
              {FrontEndSkills.map((data, i) => (
                <S.ResumeDetailsHand
                  key={data.id}
                  isSkill={true}
                  direction={getResumeHandStyle(FrontEndSkills.length, true)[i]}
                >
                  <S.ResumeDetailsCard
                    direction={
                      i % 2 === 0
                        ? getResumeCardStyle(true)[0]
                        : getResumeCardStyle(true)[1]
                    }
                    isSkill={true}
                  >
                    <SkillCard data={data} />
                  </S.ResumeDetailsCard>
                </S.ResumeDetailsHand>
              ))}
            </S.ResumeDetailsContainer>
          </S.MySkillIndividualContainer>
          <S.MySkillIndividualContainer>
            <S.MySkillTitle>Back End</S.MySkillTitle>
            <S.ResumeDetailsContainer style={{height:isMobileView ? '300px' : 'auto',gap:"3.5rem",minHeight:isMobileView ? 'auto' : "50vh"}}>
              {BackEndSkills.map((data, i) => (
                <S.ResumeDetailsHand
                  key={data.id}
                  isSkill={true}
                  direction={getResumeHandStyle(FrontEndSkills.length, true)[i]}
                >
                  <S.ResumeDetailsCard
                    direction={
                      i % 2 === 0
                        ? getResumeCardStyle(true)[0]
                        : getResumeCardStyle(true)[1]
                    }
                    isSkill={true}
                  >
                    <SkillCard data={data} />
                  </S.ResumeDetailsCard>
                </S.ResumeDetailsHand>
              ))}
            </S.ResumeDetailsContainer>
          </S.MySkillIndividualContainer>
        </S.MySkillComponentContainer>
      )}
    </S.ResumeContainer>
  );
};

export default ResumeSection;
