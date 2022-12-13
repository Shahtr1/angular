import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

// type safe selectors
export const selectAuthState = createFeatureSelector<AuthState>("auth");

// memoized function
export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);

export const isLoggedOut = createSelector(isLoggedIn, (loggedIn) => !loggedIn);
