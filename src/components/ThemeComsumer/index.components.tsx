import { Theme } from "@testing-library/dom/node_modules/pretty-format";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useThemes } from "../../hooks/useThemes";
import { ThemeProvider } from "@material-ui/styles";

const ThemeConsumer: React.FC = (props) => {
  const theme = useSelector((state: any) => state.theme.activeTheme) as Theme;
  const { initTheme } = useThemes();
  const { children } = props;

  useEffect(() => {
    if (!theme) initTheme();
  }, [initTheme, theme]);

  if (!theme) return null;

  return (
    <>
      <ThemeProvider theme={{ ...theme }}>{children}</ThemeProvider>
    </>
  );
};

export default ThemeConsumer;
