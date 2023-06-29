import { useSelector } from "react-redux";
import { RootState } from "../slice/configureStore";

//useSelector cannot be called outside functions
export const useTheme = () => useSelector((store: RootState) => store.theme);

export const useComponentStatus = (value: string) => {
  const { navActive } = useTheme();
  return navActive === value;
};
