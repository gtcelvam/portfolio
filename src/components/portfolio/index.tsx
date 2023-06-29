import { useState, useEffect, useRef } from "react";
import PortfolioCard from "../../utils/widgets/portfolioCards";
import PLACEHOLDER from "../../assests/images/portfolio.jpg";
import S from "./portfolio.style";
import { useDispatch } from "react-redux";
import { ScrollObserver } from "../../utils/helpers";
import { ProjectsData } from "../../utils/constants";
import { useComponentStatus } from "../../utils/helpers/hooks";

const PortfolioSection = () => {
  //constructor
  const dispatch = useDispatch();

  //constants
  const portfolioRef = useRef<HTMLElement>(null);
  const componentId = useComponentStatus("portfolio") ? "portfolio-active" : "";

  useEffect(() => {
    if (portfolioRef.current) {
      let ref = portfolioRef.current;
      ScrollObserver(ref, "portfolio", dispatch);
    }
  }, []);

  return (
    <S.PortfolioContainer
      id="portfolio"
      className={componentId}
      ref={portfolioRef}
    >
      <S.PortfolioHeadContainer>
        <S.PortfolioHeadTitle>
          Visit these sites here for more
        </S.PortfolioHeadTitle>
        <S.PorfolioHeadMainTitle variant="h3">MY WORKS</S.PorfolioHeadMainTitle>
      </S.PortfolioHeadContainer>
      <S.PortfolioCardContainer container>
        {ProjectsData.map((item) => (
          <PortfolioCard key={item.id} data={item} />
        ))}
      </S.PortfolioCardContainer>
    </S.PortfolioContainer>
  );
};

export default PortfolioSection;
