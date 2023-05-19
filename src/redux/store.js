import { configureStore } from '@reduxjs/toolkit';

import { usersReducer } from './users/users.slice';
import { filterReducer } from './users/filter.slice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filter: filterReducer,
  },
});
