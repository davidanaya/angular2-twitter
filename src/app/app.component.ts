import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { FaceComponent } from './face/face.component';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'face/:id', component: FaceComponent },
  { path: 'face', component: FaceComponent }
];
