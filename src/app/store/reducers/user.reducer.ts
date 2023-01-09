import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUserById, loadUserByIdError, loadUserByIdSuccess } from '../actions/index';


export interface UserState {
  id: number | null,
  user: User | null;
  loaded: boolean,
  loading: boolean,
  error: string
};

const initialState: UserState = {
  id: null,
  user: null,
  loading: false,
  loaded: false,
  error: ''
};

export const userReducer = createReducer(
  initialState,
  on(loadUserById, (state, { id }) => ({ ...state, loading: true, loaded: false, id })),
  on(loadUserByIdSuccess, (state, { payload }) => ({ ...state, user: payload, loading: false, loaded: true })),
  on(loadUserByIdError, (state, { payload }) => ({ ...initialState, error: payload })),
);
