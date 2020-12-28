import React from "react";
import { useImmer } from "use-immer";

const makeStore = () => {
  const Context = React.createContext();

  const Provider = ({ children, initialState = {} }) => {
    // Instead of use state we use Use Immer which will give us back an immutable setter
    const [state, setState] = useImmer(initialState);

    // We then only recompute this function if something changes
    const contextValue = React.useMemo(() => [state, setState], [
      state,
      setState,
    ]);

    // We return a context Provider witht the above on it
    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
  };

  const useStore = () => React.useContext(Context);

  return { Provider, useStore };
};

export default makeStore;
