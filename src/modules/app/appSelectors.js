import { createSelector } from "reselect";
const getCurrentUser = state => state.app.currentUser;

export const currentUserRole = createSelector(
  getCurrentUser,
  user => user
);
