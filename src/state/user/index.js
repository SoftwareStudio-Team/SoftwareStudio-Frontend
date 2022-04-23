import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import UserApi from '../../api/user';

const initialState = {
  user: undefined,
};

export const fetchLogin = createAsyncThunk(
  'user/fetchLogin',
  async ({ username, password }) => {
    const response = await UserApi.login({ username, password });
    return response.data;
  },
);

export const fetchLogout = createAsyncThunk('user/fetchLogout', async () => {
  await UserApi.logout();
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchLogin.fulfilled,
        (
          state,
          {
            payload: {
              id,
              username,
              firstName,
              lastName,
              birthDate,
              role,
              isBanned,
            },
          },
        ) => {
          state.user = {
            id,
            username,
            firstName,
            lastName,
            birthDate,
            role,
            isBanned,
          };
          toast.success('Login Successful');
        },
      )
      .addCase(fetchLogin.rejected, () => {
        toast.error('Login Failed');
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.user = undefined;
      })
      .addCase(fetchLogout.rejected, () => {
        toast.error('Logout Failed');
      });
  },
});

export default userSlice.reducer;
