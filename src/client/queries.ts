import { gql } from "@apollo/client";

export const ProfileQuery = gql`
  query {
    profile {
      id
      name
      url
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
