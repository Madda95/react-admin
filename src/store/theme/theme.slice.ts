import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "@material-ui/core/styles";

import { initialState } from "../theme/theme.state";

export const { actions: themeActions, reducer: themeReducers } = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (
      state,
      action: PayloadAction<{ label: string; activeTheme: any }>
    ) => {
      const { label, activeTheme } = action.payload;
      state.activeThemeLabel = label as "light" | "dark";
      state.activeTheme = activeTheme as Theme;
    },
  },
});
