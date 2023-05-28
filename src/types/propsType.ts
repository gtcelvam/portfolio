import { CSSProperties, ReactNode } from "react";

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
  data: PortfolioData;
};

export type PortfolioData = {
  id: string;
  title: string;
  image: string;
  description: string;
  link: string;
  tech: string[];
};

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  customStyles?: CSSProperties;
};

export type ProjectModalType = {
  data: PortfolioData;
  open: boolean;
  onClose: () => void;
  customStyles?: CSSProperties;
};
