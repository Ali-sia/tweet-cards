import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64671a0f2ea3cae8dc258f90.mockapi.io/';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const subscribeUser = createAsyncThunk(
  'users/subscribeUser',
  async (newUser, thunkAPI) => {
    const { id, name, tweets, followers, avatar, followed } = newUser;
    try {
      const response = await axios.put(`/users/${id}`, {
        id,
        name,
        tweets,
        followers,
        avatar,
        followed,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const unsubscribeUser = createAsyncThunk(
  'users/unsubscribeUser',
  async (newUser, thunkAPI) => {
    const { id, name, tweets, followers, avatar, followed } = newUser;
    try {
      const response = await axios.put(`/users/${id}`, {
        id,
        name,
        tweets,
        followers,
        avatar,
        followed,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
