import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { UsersService } from "src/app/services/users.service";
import { loadUserById, loadUserByIdError, loadUserByIdSuccess } from '../actions/'


const cache = new Map();

@Injectable()
export class UserEffects {
  loadUserById$ =
    createEffect(
      () => this.actions$.pipe(
        ofType(loadUserById),
        mergeMap((action) => this.usersService.getById(action.id)
          .pipe(
            map(({ data }) => loadUserByIdSuccess({ payload: data })),
            catchError((err: HttpErrorResponse) => of(loadUserByIdError({ payload: err.message })))
          )
        )
      )
    );

  /**
   * 
   * @param actions$ observable of any action triggered in the store
   * @param usersService comunicates with the restApi
   */
  constructor(private actions$: Actions, private usersService: UsersService) { }
}
