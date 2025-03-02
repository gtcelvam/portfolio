import { useEffect, useRef } from "react";
import PortfolioCard from "../../utils/widgets/portfolioCards";
import PLACEHOLDER from "../../assests/images/portfolio.jpg";
import { useDispatch } from "react-redux";
import { ScrollObserver } from "../../utils/helpers";
import { useComponentStatus } from "../../utils/helpers/hooks";
import { ProjectQuery } from "../../client/queries";
import { useQuery } from "@apollo/client";
import { projectReturnType } from "../../types/returnType";
import S from "./portfolio.style";

const PortfolioSection = () => {
  //constructor
  const dispatch = useDispatch();

  //hooks
  const {
    loading: isProjectLoading,
    data,
    error: projectError,
  } = useQuery(ProjectQuery);

  //constants
  const portfolioRef = useRef<HTMLElement>(null);
  const componentId = useComponentStatus("portfolio");
  let ProjectsData = data?.getAllProjects || [];

  useEffect(() => {
    if (portfolioRef.current) {
      let ref = portfolioRef.current;
      ScrollObserver(ref, "portfolio", dispatch);
    }
  }, []);

  useEffect(() => {
    let portfolioClass = portfolioRef.current?.classList;
    let isClassPresent = portfolioClass?.contains("portfolio-active");
    if (componentId && !isClassPresent) portfolioClass?.add("portfolio-active");
  }, [componentId]);

  return (
    <S.PortfolioContainer id="portfolio" ref={portfolioRef}>
      <S.PortfolioHeadContainer>
        <S.PortfolioHeadTitle>
          Visit these sites here for more
        </S.PortfolioHeadTitle>
        <S.PorfolioHeadMainTitle variant="h3">MY WORKS</S.PorfolioHeadMainTitle>
      </S.PortfolioHeadContainer>
      <S.PortfolioCardContainer container>
        {Boolean(ProjectsData.length) &&
          ProjectsData.map((item: projectReturnType) => (
            <PortfolioCard key={item.id} data={item} />
          ))}
      </S.PortfolioCardContainer>
    </S.PortfolioContainer>
  );
};

export default PortfolioSection;
