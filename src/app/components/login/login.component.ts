import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(private authService: AuthService, private router: Router) {
    this.message = '';
  }

  login(username: string, password: string): boolean {
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials.';
      setTimeout(function() {
        this.message = '';
      }.bind(this), 2500);
      return false;
    } else {
      this.router.navigate(['home']);
    }
    
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }

  ngOnInit() {
  }

}
