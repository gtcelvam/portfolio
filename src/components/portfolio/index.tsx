import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import PortfolioCard from "../../utils/widgets/portfolioCards";
import { ScrollObserver } from "../../utils/helpers";
import { ProjectQuery } from "../../client/queries";
import { ProjectsData as FallbackProjects } from "../../utils/constants";
import { projectReturnType } from "../../types/returnType";
import S from "./portfolio.style";

const PortfolioSection = () => {
  const dispatch = useDispatch();
  const portfolioRef = useRef<HTMLElement>(null);
  const { data } = useQuery(ProjectQuery);

  const rawProjects =
    data?.getAllProjects && data.getAllProjects.length > 0
      ? data.getAllProjects
      : FallbackProjects;

  const normalizedProjects: projectReturnType[] = rawProjects.map((item: any) => ({
    id: item.id,
    name: item.name || item.title,
    description: item.description,
    techStack: item.techStack || item.tech || [],
    projectLink: item.projectLink || item.link || "#",
    repositoryLink: item.repositoryLink || "https://github.com/gtcelvam",
    image: item.image,
  }));

  useEffect(() => {
    if (portfolioRef.current) {
      ScrollObserver(portfolioRef.current, "portfolio", dispatch);
    }
  }, [dispatch]);

  return (
    <S.PortfolioContainer id="portfolio" ref={portfolioRef}>
      <S.PortfolioHeadContainer>
        <S.PortfolioHeadTitle>CURATED SHOWCASE</S.PortfolioHeadTitle>
        <S.PorfolioHeadMainTitle variant="h2">Featured Works</S.PorfolioHeadMainTitle>
      </S.PortfolioHeadContainer>

      <Grid container spacing={3.5}>
        {normalizedProjects.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <PortfolioCard data={item} />
          </Grid>
        ))}
      </Grid>
    </S.PortfolioContainer>
  );
};

export default PortfolioSection;
