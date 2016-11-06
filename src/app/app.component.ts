import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { FaceComponent } from './components/face/face.component';
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './components/home/home.component';
import { LoggedInGuard } from './guards/loggedIn.guard';
import { TweetService } from './components/tweet/tweet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private tweetService: TweetService) {
  }

  public sendTweet() {
    this.tweetService.sendTweet();
  }
}

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [ LoggedInGuard ] },
  { path: 'people', component: PeopleComponent, canActivate: [ LoggedInGuard ] },
  { path: 'face/:id', component: FaceComponent, canActivate: [ LoggedInGuard ] },
  { path: 'face', component: FaceComponent, canActivate: [ LoggedInGuard ] }
];
