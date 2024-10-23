import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  tokens: null,
  username: null,
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload: { user, tokens } }) => {
      state.isLoggedIn = true;
      state.tokens = tokens;
      state.user = user;
      state.email = user.email;
    },
    removeCredentials: (state) => {
      state.isLoggedIn = false;
      state.tokens = null;
      state.username = null;
    },
    updateUser: (state, { payload }) => {
      state.username = payload;
    },
    resetState: () => initialState,
  },
});

export const { setCredentials, removeCredentials, updateUser, resetState } =
  authSlice.actions;

export default authSlice.reducer;
