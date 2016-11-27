import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { User } from '../model/user.model';
import { AuthService } from '../../components/auth/auth.service';

@Injectable()
export class UsersService {

  private allUsers: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire, private authService: AuthService) {
    this.getAll();
  }

  getAll(): FirebaseListObservable<any[]> {
    this.allUsers = this.af.database
      .list('/users');
    return this.allUsers;
  }

  getUser(uid: string): FirebaseObjectObservable<any[]> {
    return this.af.database.object('/users/' + uid);
  }

  create(user: User) {
    this.update(user);
  }

  update(user: User) {
    this.allUsers
      .update(user.uid, user)
      .then(
        () => console.log(`success updating user ${user.uid}`),
        error => console.log('error')
      )
  }

}