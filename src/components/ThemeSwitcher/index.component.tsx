import Switch from "@material-ui/core/Switch";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useThemes } from "../../hooks/useThemes";

const ThemeSwitcher: React.FC = () => {
  const { set } = useThemes();
  const theme = useSelector((state: any) => state.theme.activeThemeLabel);

  const handleChange = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    set(newTheme);
  }, [theme, set]);

  return <Switch onChange={handleChange} />;
};

export default ThemeSwitcher;
