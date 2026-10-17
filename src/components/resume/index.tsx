import { useState, useEffect, useRef, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { Grid, Typography, Box } from "@mui/material";
import {
  EducationDetails,
  Experience as FallbackExperience,
  FrontEndSkills as FallbackFrontEnd,
  BackEndSkills as FallbackBackEnd,
} from "../../utils/constants";
import { ScrollObserver } from "../../utils/helpers";
import ResumeCard from "../../utils/widgets/resumeCard";
import SkillCard from "../../utils/widgets/skillsCard";
import { ExperienceQUery, SkillQuery } from "../../client/queries";
import S from "./resume.style";

const ResumeSection = () => {
  const dispatch = useDispatch();
  const [resumeToggle, setResumeToggle] = useState("experience");
  const resumeRef = useRef<HTMLElement>(null);

  const { data: experienceData } = useQuery(ExperienceQUery);
  const { data: skillData } = useQuery(SkillQuery);

  const experiences =
    experienceData?.getAllExperience && experienceData.getAllExperience.length > 0
      ? experienceData.getAllExperience
      : FallbackExperience;

  const allSkills = skillData?.getAllSkills || [];
  const frontEndList =
    allSkills.length > 0
      ? allSkills.filter((item: any) => !item.backend)
      : FallbackFrontEnd;
  const backEndList =
    allSkills.length > 0
      ? allSkills.filter((item: any) => item.backend)
      : FallbackBackEnd;

  useEffect(() => {
    if (resumeRef.current) {
      ScrollObserver(resumeRef.current, "resume", dispatch);
    }
  }, [dispatch]);

  const handleToggleChange = (_: MouseEvent<HTMLElement>, toggleValue: string | null) => {
    if (toggleValue) setResumeToggle(toggleValue);
  };

  return (
    <S.ResumeContainer id="resume" ref={resumeRef}>
      <S.SectionEyebrow>CAREER & CAPABILITIES</S.SectionEyebrow>
      <S.ResumeTitle variant="h2">Resume & Technical Stack</S.ResumeTitle>

      <S.ResumeToggleBtnGrp
        value={resumeToggle}
        onChange={handleToggleChange}
        exclusive
        aria-label="Resume category tabs"
      >
        <S.ResumeToggleBtn value="experience">Experience</S.ResumeToggleBtn>
        <S.ResumeToggleBtn value="professional-skills">Technical Skills</S.ResumeToggleBtn>
        <S.ResumeToggleBtn value="education">Education</S.ResumeToggleBtn>
      </S.ResumeToggleBtnGrp>

      {resumeToggle === "experience" && (
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {experiences.map((item: any) => (
            <Grid item xs={12} md={6} key={item.id}>
              <ResumeCard data={item} />
            </Grid>
          ))}
        </Grid>
      )}

      {resumeToggle === "education" && (
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {EducationDetails.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <ResumeCard data={item} />
            </Grid>
          ))}
        </Grid>
      )}

      {resumeToggle === "professional-skills" && (
        <Box sx={{ width: "100%", mt: 3 }}>
          <Typography variant="h5" fontWeight={700} sx={{ mb: 2.5 }}>
            Frontend Engineering
          </Typography>
          <Grid container spacing={2} sx={{ mb: 5 }}>
            {frontEndList.map((skill: any) => (
              <Grid item xs={6} sm={4} md={3} key={skill.id}>
                <SkillCard
                  data={{
                    id: skill.id,
                    name: skill.name || skill.skill,
                    image: skill.image || skill.logo,
                  }}
                />
              </Grid>
            ))}
          </Grid>

          <Typography variant="h5" fontWeight={700} sx={{ mb: 2.5 }}>
            Backend & Databases
          </Typography>
          <Grid container spacing={2}>
            {backEndList.map((skill: any) => (
              <Grid item xs={6} sm={4} md={3} key={skill.id}>
                <SkillCard
                  data={{
                    id: skill.id,
                    name: skill.name || skill.skill,
                    image: skill.image || skill.logo,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </S.ResumeContainer>
  );
};

export default ResumeSection;
