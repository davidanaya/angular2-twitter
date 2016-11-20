import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2';

import { AuthService } from '../auth/auth.service';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  private uid: string;
  private users: FirebaseListObservable<any[]>;;

  constructor(
    private route: ActivatedRoute, 
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router) {

    if (route.snapshot.params['uid']) {
      this.uid = route.snapshot.params['uid'];
    }

    if (route.snapshot.url[0].path === 'registered') {
      let redirect = route.snapshot.params['redirect'];
      this.usersService.create(this.createUserFromAuthenticated());
      router.navigate([redirect]);
    }
  }

  private createUserFromAuthenticated(): User {
    let authenticated = this.getConnectedUser();
    let user = new User(authenticated.uid, authenticated.email);
    return user;
  }

  private getConnectedUser(): any {
    return this.authService.getUser();
  }

  ngOnInit() {
    if (!this.uid) {
      this.uid = this.getConnectedUser().uid;
    }
    this.users = this.usersService.getAll();
  }

}
