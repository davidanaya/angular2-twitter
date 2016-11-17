import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent, routes } from './app.component';
import { FaceComponent } from './components/face/face.component';
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthFormComponent } from './components/auth/auth-form/auth-form.component';
import { LoggedInGuard } from './guards/loggedIn.guard';
import { AUTH_PROVIDERS } from './components/auth/auth.service';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { TweetService } from './components/tweet/tweet.service';

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
    FaceComponent,
    PeopleComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TimelineComponent,
    TweetComponent,
    AuthFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    MaterialModule.forRoot()
  ],
  providers: [
    AUTH_PROVIDERS,
    { provide: TweetService, useClass: TweetService },
    LoggedInGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch((err: any) => console.error(err));