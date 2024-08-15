// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { axiosPrivate } from '../../../api/axios';

// interface AuthState {
//   isTokenValid: boolean;
//   role: string | null;
//   status: 'idle' | 'loading' | 'succeeded' | 'failed';
// }

// const initialState: AuthState = {
//   isTokenValid: false,
//   role: null,
//   status: 'idle',
// };

// export const checkToken = createAsyncThunk(
//   'auth/checkToken',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosPrivate.get('/auth/validate-token');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue((error as any).response.data);
//     }
//   }
// );

// const authSliice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(checkToken.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(checkToken.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.isTokenValid = action.payload.valid;
//         state.role = action.payload.role;
//       })
//       .addCase(checkToken.rejected, (state) => {
//         state.status = 'failed';
//         state.isTokenValid = false;
//         state.role = null;
//       });
//   },
// });

// export default authSliice.reducer;
