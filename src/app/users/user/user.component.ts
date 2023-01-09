import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import * as userActions from '../../store/actions'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit, OnDestroy {
  paramSubs!: Subscription

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.paramSubs = this.router.params.subscribe(({ id }) => {
      console.log(id);

      this.store.dispatch(userActions.loadUserById({ id }))
    })
  }

  ngOnDestroy(): void {
    this.paramSubs.unsubscribe()
  }
}
