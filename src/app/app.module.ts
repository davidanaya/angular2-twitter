import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { AppComponent, routes } from './app.component';
import { FaceComponent } from './components/face/face.component';
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoggedInGuard } from './guards/loggedIn.guard';
import { AUTH_PROVIDERS } from './services/auth.service';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { TweetService } from './components/tweet/tweet.service';

@NgModule({
  declarations: [
    AppComponent,
    FaceComponent,
    PeopleComponent,
    HomeComponent,
    LoginComponent,
    TimelineComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
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