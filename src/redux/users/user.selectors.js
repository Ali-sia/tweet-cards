import { createSelector } from '@reduxjs/toolkit';
import { statusFilter } from './filter.constants';

export const getUsers = state => state.users.users;
export const getIsLoading = state => state.users.isLoading;
export const getError = state => state.users.error;

export const getFilter = state => state.filter.status;

export const selectVisibleUsers = createSelector(
  [getUsers, getFilter],
  (users, statusFilters) => {
    switch (statusFilters) {
      case statusFilter.unsubscribed:
        return users.filter(user => !user.followed);
      case statusFilter.subscribed:
        return users.filter(user => user.followed);
      default:
        return users;
    }
  }
);
