import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions/index';


export interface State {
  users: User[];
  loaded: boolean,
  loading: boolean,
  error: string
};

const initialState: State = {
  users: [],
  loading: false,
  loaded: false,
  error: ''
};

export const usersReducer = createReducer(initialState,
  on(loadUsers, (state) => ({ ...state, loading: true, loaded: false })),
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false, loaded: true })),
  on(loadUsersError, (state, { payload }) => ({ ...state, error: payload, loading: false, loaded: false })),
);
