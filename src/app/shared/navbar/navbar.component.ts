import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  id$ = this.store.select('user').pipe(map((value) => value.id))

  constructor(private router: Router, private store: Store<AppState>) { }

  onGotoUser(value: string) {
    if (value) {
      this.router.navigateByUrl(`user/${value}`)
    }
  }
}
