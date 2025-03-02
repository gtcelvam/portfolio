import { CSSProperties, ReactNode } from "react";
import { projectReturnType } from "./returnType";

export type ResumeCardDataType = {
  data: {
    id?: string;
    education?: string;
    place?: string;
    percentage?: string;
    description?: string;
    companyName?: string;
    role?: string;
    location?: string;
    duration?: string;
    icon?: string;
    image?: string;
    summary?: string;
  };
};

export type SkillCardDataType = {
  data: {
    id: string;
    name: string;
    image: string;
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
  data: projectReturnType;
  open: boolean;
  onClose: () => void;
  customStyles?: CSSProperties;
};
