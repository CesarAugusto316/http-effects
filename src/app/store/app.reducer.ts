import { ActionReducerMap } from '@ngrx/store';
import * as user from './reducers'


export interface AppState {
  users: user.UsersState
  user: user.UserState
};

export const appReducers: ActionReducerMap<AppState> = {
  users: user.usersReducer,
  user: user.userReducer
};
