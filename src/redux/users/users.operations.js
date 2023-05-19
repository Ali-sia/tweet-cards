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
  async (updatedFollowers, thunkAPI) => {
    try {
      console.log('---> ~ updatedFollowers:', updatedFollowers);

      //   const { followers } = updatedFollowers;
      //   const response = await axios.post('/users', { id, name, number });
      //   return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const unsubscribeUser = createAsyncThunk(
  'users/unsubscribeUser',
  async (contactId, thunkAPI) => {
    try {
      console.log('---> ~ contactId:', contactId);
      //   const response = await axios.delete(`/contacts/${contactId}`);
      //   return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
