import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'face',
  templateUrl: './face.component.html'
})
export class FaceComponent implements OnInit {
  private id: string;
  private user: any;

  constructor(private route: ActivatedRoute, private authService: AuthService) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  getConnectedUser(): any {
    return this.authService.getUser();
  }

  ngOnInit() {
    if (!this.id) this.user = this.getConnectedUser().auth;
  }

}
