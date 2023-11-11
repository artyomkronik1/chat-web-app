// src/app/reducers/user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { User } from '../../interfaces/user';
import * as UserActions from '../actions/user.actions';
// inital state
export interface UserState {
  users: User[];
}
export const initialState: UserState = {
  users: [],
};

// reducer
export const userReducer = createReducer(
  initialState,
  on(UserActions.addUser, (state, { user }) => ({ ...state, users: [...state.users, user] })),
  on(UserActions.loadUsers, (state) => {
    return {
        ...state,
      }
    },
    )
);
