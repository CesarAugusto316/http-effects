import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';


export const resetUserById = createAction(
  '[User Component] loadUser byID', props<{ id: number }>()
);

export const loadUserById = createAction(
  '[User Component] loadUser byID', props<{ id: number }>()
);

export const loadUserByIdSuccess = createAction(
  '[User Component] loadUserById success', props<{ payload: User }>()
);

export const loadUserByIdError = createAction(
  '[User Component] loadUserById error', props<{ payload: string }>()
);
