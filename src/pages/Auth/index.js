import React from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "./LogInMutation";
import { useLogin } from "../../modules/Auth";

export const Auth = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [login, { data, error }] = useMutation(LOGIN_MUTATION, {
    errorPolicy: "all",
  });
  const setLogin = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ variables: { login: email, password: password } });
  };

  React.useEffect(() => {
    if (data) {
      window.localStorage.setItem("tkn", JSON.stringify(data.login));
      setLogin(true);
    }
  }, [setLogin, data]);
  React.useEffect(() => {
    if (error) {
      alert(error.message);
    }
  }, [error]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
