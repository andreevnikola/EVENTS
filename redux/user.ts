import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    user: undefined,
  },
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      state.user = action.payload;
    },
  },
});

export const { setUser } = userReducer.actions;

export default userReducer.reducer;
