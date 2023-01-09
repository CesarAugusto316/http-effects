import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions/index';


export interface UsersState {
  users: User[];
  loaded: boolean,
  loading: boolean,
  error: string
};

const initialState: UsersState = {
  users: [],
  loading: false,
  loaded: false,
  error: ''
};

export const usersReducer = createReducer(initialState,
  on(loadUsers, (state) => ({ ...state, loading: true, loaded: false })),
  on(loadUsersSuccess, (state, { payload }) => ({ ...state, users: payload, loading: false, loaded: true })),
  on(loadUsersError, (state, { payload }) => ({ ...initialState, error: payload })),
);
