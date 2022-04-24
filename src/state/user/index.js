import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import UserApi from '../../api/user';
import AccountsApi from '../../api/accounts';

const initialState = {
  user: undefined,
};

export const fetchLogin = createAsyncThunk(
  'user/fetchLogin',
  async ({ username, password }) => {
    const response = await UserApi.login({ username, password });
    if (response.data.isBanned) {
      toast.error('This account has been banned');
      return undefined;
    }
    return response.data;
  },
);

export const fetchUpdate = createAsyncThunk(
  'user/fetchUpdate',
  async ({ id, firstName, lastName, birthDate }) => {
    const response = await AccountsApi.update({
      id: id,
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
    });
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
      .addCase(
        fetchUpdate.fulfilled,
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
          toast.success('Update Successful');
        },
      )
      .addCase(fetchUpdate.rejected, () => {
        toast.error('Update Failed');
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
