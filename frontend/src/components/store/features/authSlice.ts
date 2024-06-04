import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Role = 'recruiter' | 'candidate';

interface LoginPayload {
  role: Role;
}


const initialState = {
  isLoggedIn: false,
  role : null as Role | null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    login: (
      state, 
      // This Action will sent from the login form (HeroSection2 or ...)
      action: PayloadAction<LoginPayload>) => {
        state.isLoggedIn = true;
        state.role= action.payload.role ;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.role= null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;