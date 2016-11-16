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

  login(event) {
    this.authService.login(event.user);
  }

  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    }
  }

}