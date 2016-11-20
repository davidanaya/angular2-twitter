import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthService {
  private authData: any = null;
  
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  
  constructor(private af: AngularFire) {
  }

  private storeAuthData(response) {
    this.authData = response;
    localStorage.setItem('authData', JSON.stringify(this.authData));
    return this.authData;
  }

  private getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem('authData'));
  }

  register(user: any): any {
    return this.af.auth
      .createUser(user)
      .then(response => this.storeAuthData(response.auth));
  }

  login(user: any): any {
    return this.af.auth
      .login(user)
      .then(response => this.storeAuthData(response.auth));
  }

  isAuthenticated(): boolean {
    if (this.authData) return true;

    // check localStorage in case of page refresh
    this.authData = this.getUserFromLocalStorage();
    return !!this.authData;
  }

  getUser(): any {
    if (!this.authData) this.authData = this.getUserFromLocalStorage();
    return this.authData;
  }

  logout(): any {
    this.af.auth.logout();
    this.authData = null;
    localStorage.removeItem('authData');
  }

}

export var AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
