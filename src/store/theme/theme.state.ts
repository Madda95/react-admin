export interface ThemeState {
  activeThemeLabel: "light" | "dark" | null;
  activeTheme: any;
}

export const initialState: ThemeState = {
  activeThemeLabel: null,
  activeTheme: null,
};
