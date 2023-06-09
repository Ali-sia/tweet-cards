import { createSlice } from '@reduxjs/toolkit';

import { statusFilter } from './filter.constants';

const filterInitialState = {
  status: statusFilter.all,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
