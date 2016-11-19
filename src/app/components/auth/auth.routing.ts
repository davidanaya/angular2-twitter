import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routing = RouterModule.forChild([
  { 
    path: 'auth', 
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