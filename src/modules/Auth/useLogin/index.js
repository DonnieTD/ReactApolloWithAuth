import { useStore } from "../../../store";

export const useLogin = () => {
  const [_, setState] = useStore();
  const setLogin = (value) => {
    setState((state) => {
      state.Auth.loggedIn = value;
    });
  };

  return setLogin;
};
