import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, subscribeUser, unsubscribeUser } from './users.operations';

const usersInitialState = {
  users: {},
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchUsers.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(subscribeUser.fulfilled, (state, { payload }) => {
        state.users = payload;
        console.log('---> ~ .addCase ~ payload:', payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(subscribeUser.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(subscribeUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(unsubscribeUser.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(unsubscribeUser.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(unsubscribeUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
