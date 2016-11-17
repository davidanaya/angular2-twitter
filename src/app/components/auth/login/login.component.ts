import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  private error: string;
  private user: any;

  constructor(private authService: AuthService) {
  }

  loginUser(event) {
    return this.authService
      .login(event.user)
      .then(
        user => console.log('Success!'), 
        reason => this.error = reason.message
      );
  }

  ngOnInit() {
    this.error = null;
    this.user = {
      email: '',
      password: ''
    }
  }

}