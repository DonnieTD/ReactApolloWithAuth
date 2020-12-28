import React from "react";
import "./App.css";
import { useAuthStatus, useLogin } from "./modules";
import { Auth, Dashboard } from "./pages";
import { gql, useQuery } from "@apollo/client";
import { findAllInRenderedTree } from "react-dom/cjs/react-dom-test-utils.development";

const GET_USER = gql`
  query {
    current {
      id
      login
    }
  }
`;

const App = () => {
  const login = useLogin();
  const [{ loggedIn }] = useAuthStatus();
  const { client, loading, error, data } = useQuery(GET_USER, {
    errorPolicy: "all",
  });

  React.useEffect(() => {
    if (error) {
      console.log(error.message);
    }
  }, [error]);

  React.useEffect(() => {
    if (data) {
      login(data.current !== null ? true : false);
    }
  }, [loading, login, data]);

  React.useEffect(() => {
    if (!loggedIn) {
      client.resetStore();
    }
  }, [client, loggedIn]);

  if (loggedIn) {
    return <Dashboard />;
  } else if (!loggedIn && loading) {
    return <h1>Loading...</h1>;
  } else {
    return <Auth />;
  }
};

export default App;
