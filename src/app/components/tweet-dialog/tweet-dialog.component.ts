import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material/dialog';

import { FirebaseObjectObservable } from 'angularfire2';

import { UsersService } from '../../shared/services/users.service';
import { TweetService } from '../../shared/services/tweet.service';

console.log(TweetService);
console.log(UsersService);

@Component({
  selector: 'app-tweet-dialog',
  templateUrl: './tweet-dialog.component.html'
})
export class TweetDialogComponent implements OnInit {
  //private user: FirebaseObjectObservable<any[]>;
  private user: any;

  constructor(
    public dialogRef: MdDialogRef<TweetDialogComponent>,
    private usersService: UsersService,
    private tweetService: TweetService) {  
  }

  ngOnInit() {
    this.user = this.tweetService.getUser();
  }

}
