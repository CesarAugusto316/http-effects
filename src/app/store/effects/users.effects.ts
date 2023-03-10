import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { UsersService } from "src/app/services/users.service";
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions/'


const cache = new Map();

@Injectable()
export class UsersEffects {
  loadUsers$ =
    createEffect(
      () => this.actions$.pipe(
        ofType(loadUsers),
        mergeMap(() => this.usersService.getAll()
          .pipe(
            map(({ data }) => loadUsersSuccess({ payload: data })),
            catchError((err: HttpErrorResponse) => of(loadUsersError({ payload: err.message })))
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
