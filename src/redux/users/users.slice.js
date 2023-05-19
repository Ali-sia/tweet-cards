import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, subscribeUser, unsubscribeUser } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersInitialState = {
  users: {
    user: null,
    tweets: null,
    followers: null,
    avatar: null,
  },
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
        handlePending();
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        handleRejected();
      })
      .addCase(subscribeUser.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(subscribeUser.pending, (state, { payload }) => {
        handlePending();
      })
      .addCase(subscribeUser.rejected, (state, { payload }) => {
        handleRejected();
      })
      .addCase(unsubscribeUser.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(unsubscribeUser.pending, (state, { payload }) => {
        handlePending();
      })
      .addCase(unsubscribeUser.rejected, (state, { payload }) => {
        handleRejected();
      });
  },
});

export const usersReducer = usersSlice.reducer;
