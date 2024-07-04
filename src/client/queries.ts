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
