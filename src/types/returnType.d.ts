export type experienceReturnType = {
  id: string;
  companyName: string;
  role: string;
  startDate: string;
  endDate: string;
  summary: string;
  image: string;
};

export type skillsReturnType = {
  id: string;
  name: string;
  experience: string;
  image: string;
  backend: boolean;
};

export type projectReturnType = {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  projectLink: string;
  repositoryLink: string;
  image: string;
};
