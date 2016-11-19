import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

export const routing = RouterModule.forChild([
  { 
    path: 'auth',
    canActivateChild: [ AuthGuard ],
    children: [
      { 
        path: 'login',
        component: LoginComponent
      },
      { 
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
]);