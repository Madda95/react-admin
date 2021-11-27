import { createTheme, Theme } from "@material-ui/core/styles";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFromLocalStorage, setLocalStorageValue } from "../utils/commons";
import { themeActions } from "../store/theme/theme.slice";
import { availableThemes } from "../styles/themes";

type AvailableThemes = "light" | "dark";

export const useThemes = () => {
  const dispatch = useDispatch();
  const { setTheme } = themeActions;
  const theme = useSelector((state: any) => state.theme.activeTheme) as Theme;
  const DEFAULT_THEME = "light";

  const set = useCallback(
    (type: AvailableThemes) => {
      const generatedTheme = createTheme(availableThemes[type] as Theme);
      dispatch(setTheme({ label: type, activeTheme: generatedTheme }));
      setLocalStorageValue("theme", type);
    },
    [setTheme, dispatch]
  );

  const initTheme = () => {
    if (!theme) {
      const storageTheme = getFromLocalStorage("theme") as AvailableThemes;
      set(storageTheme ?? DEFAULT_THEME);
    }
  };

  return { set, initTheme };
};
