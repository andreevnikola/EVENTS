import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

const themeReducer = createSlice({
  name: "theme",
  initialState: {
    theme: "cupcake",
  },
  reducers: {
    changedTheme: (state) => {
      state.theme = state.theme == "cupcake" ? "halloween" : "cupcake";
    },
    setTheme: (state, action: PayloadAction<"cupcake" | "halloween">) => {
      state.theme = action.payload;
    },
  },
});

export const { changedTheme, setTheme } = themeReducer.actions;

export default themeReducer.reducer;
