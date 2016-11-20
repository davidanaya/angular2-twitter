import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2';

import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  private users: FirebaseListObservable<any[]>;

  constructor(
    private usersService: UsersService,
    private router: Router) {
  }

  viewProfile(uid: string) {
    this.router.navigate(['profile', {uid: uid}]);
    new EventEmitter();
  }

  ngOnInit() {
    this.users = this.usersService.getAll();
  }

}
