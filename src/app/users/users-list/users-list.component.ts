import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription, } from 'rxjs';

// ngrx/store
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as usersActions from '../../store/actions/index';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit, OnDestroy {
  users =
    this.store.select('users').pipe(map(({ users }) => users))
  usersSubs!: Subscription;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // this.usersSubs = this.store.select('users').subscribe(({ users }) => {
    //   this.users = users
    // })
    // if (!this.users.length) {
    // }
    this.store.dispatch(usersActions.loadUsers())
  }

  ngOnDestroy(): void {
    // this.users.
  }
}
