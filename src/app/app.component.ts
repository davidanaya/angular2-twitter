import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { FaceComponent } from './components/face/face.component';
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './components/home/home.component';
import { LoggedInGuard } from './guards/loggedIn.guard';
import { TweetService } from './components/tweet/tweet.service';

import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

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
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth', 
    children: [
      { path: 'login',
        component: LoginComponent
      },
      { path: 'register',
        component: RegisterComponent
      }
    ]
  }
  /*,
  { path: 'home', component: HomeComponent, canActivate: [ LoggedInGuard ] },
  { path: 'people', component: PeopleComponent, canActivate: [ LoggedInGuard ] },
  { path: 'face/:id', component: FaceComponent, canActivate: [ LoggedInGuard ] },
  { path: 'face', component: FaceComponent, canActivate: [ LoggedInGuard ] }
  */
];
