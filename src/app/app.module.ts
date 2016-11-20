import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersService } from './shared/services/users.service';
import { PeopleComponent } from './components/people/people.component';
import { AUTH_PROVIDERS } from './components/auth/auth.service';
import { AuthGuard } from './components/auth/auth.guard';
import { AuthModule } from './components/auth/auth.module';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { TweetService } from './components/tweet/tweet.service';
import { ProfilePipe } from './components/profile/profile.pipe';

import { routing } from './app.routing';

const firebaseConfig = {
  apiKey: "AIzaSyA0F2dWFY9djrRje8oHHN_5f1dQWTl6arg",
  authDomain: "knowtwitter-ed0fa.firebaseapp.com",
  databaseURL: "https://knowtwitter-ed0fa.firebaseio.com",
  storageBucket: "knowtwitter-ed0fa.appspot.com",
  messagingSenderId: "132647063045"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PeopleComponent,
    TimelineComponent,
    TweetComponent,
    ProfilePipe
  ],
  imports: [
    routing,
    BrowserModule,
    AuthModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    MaterialModule.forRoot()
  ],
  providers: [
    AUTH_PROVIDERS,
    UsersService,
    { provide: TweetService, useClass: TweetService },
    AuthGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch((err: any) => console.error(err));