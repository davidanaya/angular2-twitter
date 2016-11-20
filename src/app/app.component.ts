import { Component, OnInit } from '@angular/core';
import { Routes, Router, NavigationStart } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { PeopleComponent } from './components/people/people.component';
import { TimelineComponent } from './components/timeline/timeline.component';
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
  private selectedTab: number = 0;

  constructor(
    private tweetService: TweetService, 
    private authService: AuthService,
    private router: Router) {
      router.events
        .subscribe(event => { 
          if (event instanceof NavigationStart) {
            this.updateSelectedTabByUrlState(event.url);
          }
        });
  }

  private updateSelectedTabByUrlState(url: string) {
    if (url.includes('timeline')) this.selectedTab = 0;
    if (url.includes('people')) this.selectedTab = 1;
    if (url.includes('profile')) this.selectedTab = 2;
  }

  logout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  getUserEmail() {
    if (!this.user) this.user = this.authService.getUser();
    return this.user.email;
  }

  sendTweet() {
    this.tweetService.sendTweet();
  }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

}