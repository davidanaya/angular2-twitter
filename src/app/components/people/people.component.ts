import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2';

import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  private users: FirebaseListObservable<any[]>;

  constructor(
    private route: ActivatedRoute, 
    private usersService: UsersService) {
  }

  ngOnInit() {
    this.users = this.usersService.getAll();
  }

}
