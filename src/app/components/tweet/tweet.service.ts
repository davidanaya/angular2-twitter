import { Injectable } from '@angular/core';

@Injectable()
export class TweetService {

  constructor() {
  }

  sendTweet() {
    console.log('tweetService.sendTweet!');
  }
}