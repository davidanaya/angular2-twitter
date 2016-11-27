import { Injectable, ViewContainerRef } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material/dialog';

import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { AuthService } from '../../components/auth/auth.service';
import { UsersService } from '../../shared/services/users.service';

import { Tweet } from '../model/tweet.model';

@Injectable()
export class TweetService {
  private user: FirebaseObjectObservable<any[]>;
  private allTweets: FirebaseListObservable<any[]>;

  constructor(
    private af: AngularFire,
    private authService: AuthService,
    private usersService: UsersService) {   
    // get current connected user
    let uid = this.authService.getUser().uid;
    this.user = this.usersService.getUser(uid);
  }

  getUser(): any {
    return this.user;
  }

  getAll(): FirebaseListObservable<any[]> {
    this.allTweets = this.af.database
      .list('/tweets');
    return this.allTweets;
  }

  create(tweet: Tweet) {
    this.update(tweet);
  }

  update(tweet: Tweet) {
    this.allTweets
      .update(tweet.id, tweet)
      .then(
        () => console.log(`success updating user ${tweet.id}`),
        error => console.log('error')
      )
  }

}