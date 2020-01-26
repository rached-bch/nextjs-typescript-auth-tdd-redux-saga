import gql from "graphql-tag";

export const USER_QUERY_LOGIN = gql`
  query user($id: Int!) {
    id
    name
  }
`;
