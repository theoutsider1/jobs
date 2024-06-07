import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
  isLoggedIn: false,
  role : null as string| null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
      login: (state, action) => {
          state.isLoggedIn = action.payload.isLogged;
          state.role = action.payload.role;
      },
      logout: (state) => {
          state.isLoggedIn = false;
          state.role = null;
      },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;