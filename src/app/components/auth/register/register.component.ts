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

  constructor(private authService: AuthService, private router: Router) {
  }

  createUser(event) {
    return this.authService
      .register(event.user)
      .then(
        () => {
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'app';
          this.router.navigate([redirect]);
        },
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