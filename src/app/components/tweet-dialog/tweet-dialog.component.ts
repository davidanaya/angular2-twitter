import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material/dialog';

import { FirebaseObjectObservable } from 'angularfire2';

import { TweetService } from '../../shared/services/tweet.service';
import { Tweet } from '../../shared/model/tweet.model';

@Component({
  selector: 'app-tweet-dialog',
  templateUrl: './tweet-dialog.component.html'
})
export class TweetDialogComponent implements OnInit {
  private user: FirebaseObjectObservable<any[]>;
  private text: string = '';

  constructor(
    public dialogRef: MdDialogRef<TweetDialogComponent>,
    private tweetService: TweetService) {
  }

  send() {
    console.log(`Send with text ${this.text}`);
    this.user.subscribe(snapshot => {
      console.log(snapshot.values);
    })
    //let tweet = new Tweet(this.user.uid, this.user.face, this.user.username, this.text);
  }

  ngOnInit() {
    this.user = this.tweetService.getUser();
  }

}
