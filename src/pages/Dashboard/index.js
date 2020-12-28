import React from "react";
import { useLogin } from "../../modules";

export const Dashboard = () => {
  const login = useLogin();
  return (
    <div>
      logged in
      <br />
      <button
        onClick={() => {
          window.localStorage.removeItem("tkn");
          login(false);
        }}
      >
        Log out
      </button>
    </div>
  );
};
