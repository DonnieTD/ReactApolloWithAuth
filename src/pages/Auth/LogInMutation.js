import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($login: String!, $password: String!) {
    login(login: $login, password: $password)
  }
`;
