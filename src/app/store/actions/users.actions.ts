import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';


export const loadUsers = createAction('[UsersList Component] loadUsers');

export const loadUsersSuccess = createAction(
  '[UsersList Component] loadUsers success', props<{ payload: User[] }>()
);

export const loadUsersError = createAction(
  '[UsersList Component] loadUsers error', props<{ payload: string }>()
);
