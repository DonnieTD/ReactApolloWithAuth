import { useStore } from "../../../store";

export const useAuthStatus = () => {
  const [{ Auth }] = useStore();

  return [Auth];
};
