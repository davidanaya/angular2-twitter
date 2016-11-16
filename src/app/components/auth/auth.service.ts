import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {
  }

  register(user: any): boolean {
    console.log(`in register with ${user.username}/${user.password}`);
    localStorage.setItem('username', user.username);
    localStorage.setItem('password', user.password);
    return true;
  }

  private checkUsername(username: string): boolean {
    return username === localStorage.getItem('username');
  }

  private checkPassword(password: string): boolean {
    return password === localStorage.getItem('password');
  }

  login(user: any): boolean {
    console.log(`in login with ${user.username}/${user.password}`);
    return this.checkUsername(user.username) && this.checkPassword(user.password);
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

}

export var AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
