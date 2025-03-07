import { useState, useEffect, useRef, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import {
  EducationDetails,
  Experience,
  FrontEndSkills,
  BackEndSkills,
  useCustomView,
} from "../../utils/constants";
import { sanitizedExperienceData, ScrollObserver } from "../../utils/helpers";
import ResumeCard from "../../utils/widgets/resumeCard";
import SkillCard from "../../utils/widgets/skillsCard";
import { useComponentStatus } from "../../utils/helpers/hooks";
import { useQuery } from "@apollo/client";
import { ExperienceQUery, SkillQuery } from "../../client/queries";
import S from "./resume.style";
import { experienceReturnType, skillsReturnType } from "../../types/returnType";
import { ResumeCardDataType } from "../../types/propsType";

const ResumeSection = () => {
  //constructor
  const dispatch = useDispatch();

  //state values
  const [resumeToggle, setResumeToggle] = useState("experience");
  const { data: experienceData, loading: isExperienceLoading } =
    useQuery(ExperienceQUery);
  const { data: skillData, loading: isSkillLoading } = useQuery(SkillQuery);
  const resumeRef = useRef<HTMLElement>(null);

  //constant
  const isMobileView = useCustomView();
  const isExperience = resumeToggle === "experience" && isMobileView;
  const experienceStyle = {
    height: isExperience ? "500px" : "700px",
    minHeight: isExperience ? "auto" : "80vh",
    gap: isExperience ? "5rem" : "unset",
  };
  const componentId = useComponentStatus("resume");
  const getAllExperience = experienceData?.getAllExperience || [];
  const getAllSkill = skillData?.getAllSkills || [];
  const FrontEndSkills = getAllSkill.filter(
    (item: skillsReturnType) => item.backend === false
  );
  const BackEndSkills = getAllSkill.filter(
    (item: skillsReturnType) => item.backend === true
  );

  useEffect(() => {
    if (resumeRef.current) {
      ScrollObserver(resumeRef.current, "resume", dispatch);
    }
  }, []);

  useEffect(() => {
    if (resumeRef.current) {
      let resumeClass = resumeRef.current?.classList;
      let isClassPresent = resumeClass?.contains("resume-active");
      if (componentId && !isClassPresent) resumeClass?.add("resume-active");
    }
  }, [componentId]);

  //functions
  const getResumeCardStyle = (isSkill?: boolean) => ({
    0: {
      top: isMobileView ? "0" : "50%",
      left: isMobileView ? `${isSkill ? "-125%" : "-9%"}` : "-50%",
      transform: isMobileView
        ? "translate(0%,0%)"
        : `translate(${isSkill ? "-70%" : "-50%"}, -50%)`,
    },
    1: {
      top: isMobileView ? "0" : "50%",
      right: isMobileView ? `${isSkill ? "125%" : "9%"}` : "50%",
      transform: isMobileView ? "translate(0%,0%)" : "translate(100%, -50%)",
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
        top: isMobileView
          ? `${i * (isSkill ? 10 : 30)}%`
          : `${(i + 1) * (isSkill ? 10 : 25)}%`,
        [i % 2 === 0 ? "right" : "left"]: 0,
      };
      i++;
    }
    return handData;
  };

  return (
    <S.ResumeContainer id="resume" ref={resumeRef}>
      <S.ResumeTitle variant="h2">My Resume</S.ResumeTitle>
      <S.ResumeToggleBtnGrp
        value={resumeToggle}
        onChange={handleToggleChange}
        exclusive
        aria-label="Large sizes"
      >
        <S.ResumeToggleBtn value="experience">Experience</S.ResumeToggleBtn>
        <S.ResumeToggleBtn value="professional-skills">
          Professional Skills
        </S.ResumeToggleBtn>
        <S.ResumeToggleBtn value="education">Education</S.ResumeToggleBtn>
      </S.ResumeToggleBtnGrp>
      {resumeToggle !== "professional-skills" && (
        <S.ResumeDetailsContainer style={experienceStyle}>
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
            ? getAllExperience.map((data: experienceReturnType, i: number) => (
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
              {FrontEndSkills.map((data: skillsReturnType, i: number) => (
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
            <S.ResumeDetailsContainer
              style={{
                height: isMobileView ? "300px" : "auto",
                gap: "3.5rem",
                minHeight: isMobileView ? "auto" : "50vh",
              }}
            >
              {BackEndSkills.map((data: skillsReturnType, i: number) => (
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
