import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit, OnDestroy {
  usersList$!: Observable<User[]>;
  userSubs!: Subscription;

  constructor(private usersService: UsersService) {
    this.usersList$ = usersService.getAll().pipe(map(({ data }) => data))
  }

  ngOnInit(): void {
    // this.userSubs = this.usersService.getAll()
    //   .subscribe(({ data }) => {
    //     this.usersList = data;
    //   })
  }

  ngOnDestroy(): void {
    // this.userSubs.unsubscribe()
  }
}
