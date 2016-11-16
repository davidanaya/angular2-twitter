import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  private error: string;
  private user: any;

  constructor(private authService: AuthService) {
  }

  register(event) {
    this.authService.register(event.user);
  }

  ngOnInit() {
    this.error = null;
    this.user = {
      username: '',
      password: ''
    }
  }

}