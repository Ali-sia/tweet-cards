import { configureStore } from '@reduxjs/toolkit';

import { usersReducer } from './users/users.slice';
// import { filterReducer } from '../redux/filterSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    // filter: filterReducer,
  },
});
