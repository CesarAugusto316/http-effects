import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs';

// ngrx/store
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as usersActions from '../../store/actions/index';
import { Router } from '@angular/router';
// import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit, OnDestroy {
  users$ = this.store.select('users').pipe(map(({ users }) => users));
  loading$ = this.store.select('users').pipe(map(({ loading }) => loading));
  error$ = this.store.select('users').pipe(map(({ error }) => error));

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(usersActions.loadUsers())
  }

  ngOnDestroy(): void {
  }

  onGoto(id: number) {
    this.router.navigateByUrl('user/' + id)
  }
}
