import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Routes, Router, NavigationStart } from '@angular/router';

import { AuthService } from './components/auth/auth.service';
import { TweetService } from './shared/services/tweet.service';

import { ProfileComponent } from './components/profile/profile.component';
import { PeopleComponent } from './components/people/people.component';
import { TimelineComponent } from './components/timeline/timeline.component';

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
    private viewContainerRef: ViewContainerRef,
    private tweetService: TweetService, 
    private authService: AuthService,
    private router: Router) {
      router.events
        .subscribe(event => { 
          if (event instanceof NavigationStart) {
            // to select the proper tab in main screen
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
    this.tweetService.sendTweet(this.viewContainerRef);
  }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

}