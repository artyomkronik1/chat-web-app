// src/app/actions/user.actions.ts
import { createAction, props } from '@ngrx/store';
import { User } from '../../interfaces/user';

export const loadUsers = createAction('[User] loadUsers');
export const addUser = createAction('[User] Add User', props<{ user: User }>());
