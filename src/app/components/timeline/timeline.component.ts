import { Component, OnInit } from '@angular/core';

import { Tweet } from '../tweet/tweet.model';

const fakeTweet = new Tweet('', 'user', 'username', 'This is a fake tweet!');

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html'
})
export class TimelineComponent implements OnInit {
  tweets: Tweet[];
  
  constructor() {
  }

  ngOnInit() {
    this.tweets = [ fakeTweet, fakeTweet ];
  }

}
