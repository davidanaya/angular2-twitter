import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthService {
  private authData: any = null;
  
  constructor(private af: AngularFire) {
  }

  private storeAuthData(response) {
    this.authData = response;
    return this.authData;
  }

  register(user: any): any {
    return this.af.auth
      .createUser(user)
      .then(response => this.storeAuthData(response));
  }

  login(user: any): any {
    return this.af.auth
      .login(user)
      .then(response => this.storeAuthData(response));
  }

  getUser(): any {
    return localStorage.getItem('email');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

}

export var AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
