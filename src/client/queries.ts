import { gql } from "@apollo/client";

export const ProfileQuery = gql`
  query Profile($userId: String!) {
    profile(userId: $userId) {
      name
      image
      description
      resume
    }
  }
`;

export const SocialLinkQuery = gql`
  query {
    socialLinks {
      name
      link
    }
  }
`;

export const ExperienceQUery = gql`
  query {
    getAllExperience {
      id
      companyName
      role
      startDate
      endDate
      summary
      image
    }
  }
`;

export const SkillQuery = gql`
  query {
    getAllSkills {
      id
      name
      experience
      image
      imageId
      backend
    }
  }
`;

export const ProjectQuery = gql`
  query {
    getAllProjects {
      id
      name
      description
      techStack
      projectLink
      image
    }
  }
`;
