import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { FaceComponent } from './components/face/face.component';
import { PeopleComponent } from './components/people/people.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { HomeComponent } from './components/home/home.component';
import { TweetService } from './components/tweet/tweet.service';

import { AuthService } from './components/auth/auth.service';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private user: any = null;

  constructor(private tweetService: TweetService, private authService: AuthService) {
  }

  logout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  getUserEmail() {
    if (!this.user) this.user = this.authService.getUser();
    return this.user.auth.email;
  }

  sendTweet() {
    this.tweetService.sendTweet();
  }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

}