export type ResumeCardDataType = {
  data: {
    id: string;
    education?: string;
    place?: string;
    percentage?: string;
    description?: string;
    companyName?: string;
    role?: string;
    location?: string;
    duration?: string;
    icon?: string;
  };
};

export type SkillCardDataType = {
  data: {
    id: string;
    skill: string;
    logo: string;
  };
};

export type PortfolioCardProps = {
  data: {
    id: string;
    title: string;
    image: string;
    description: string;
    link: string;
  };
};
