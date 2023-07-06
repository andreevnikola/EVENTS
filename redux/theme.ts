import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

const themeReducer = createSlice({
  name: "theme",
  initialState: {
    theme: "cupcake",
  },
  reducers: {
    changedTheme: (state) => {
      state.theme = state.theme == "cupcake" ? "halloween" : "cupcake";
      localStorage.setItem("theme", state.theme);
    },
    setTheme: (state, action: PayloadAction<"cupcake" | "halloween">) => {
      state.theme = action.payload;
    },
    setupTheme: (state) => {
      state.theme = localStorage.getItem("theme") || "cupcake";
    },
  },
});

export const { changedTheme, setTheme, setupTheme } = themeReducer.actions;

export default themeReducer.reducer;
