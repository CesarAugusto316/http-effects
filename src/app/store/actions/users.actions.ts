import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';


export const loadUsers = createAction('[User Component] loadUser');

export const loadUsersSuccess = createAction(
  '[User Component] loadUserSuccess', props<{ users: User[] }>()
);

export const loadUsersError = createAction(
  '[User Component] loadUserError', props<{ payload: any }>()
);
