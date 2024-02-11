import { gql } from "@apollo/client";

export const ProfileQuery = gql`
  query {
    profile {
      name
      image
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
