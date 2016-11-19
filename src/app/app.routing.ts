import { Routes, RouterModule } from '@angular/router';

import { TimelineComponent } from './components/timeline/timeline.component';
import { PeopleComponent } from './components/people/people.component';
import { FaceComponent } from './components/face/face.component';
import { AuthGuard } from './components/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'app', redirectTo: '/timeline', pathMatch: 'full' },
  { path: 'timeline', component: TimelineComponent, canActivate: [ AuthGuard ] },
  { path: 'people', component: PeopleComponent, canActivate: [ AuthGuard ] },
  { path: 'face/:id', component: FaceComponent, canActivate: [ AuthGuard ] },
  { path: 'face', component: FaceComponent, canActivate: [ AuthGuard ] }
];

export const routing = RouterModule.forRoot(routes, { enableTracing: false });