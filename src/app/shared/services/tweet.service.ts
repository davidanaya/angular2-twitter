import { Injectable, ViewContainerRef } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material/dialog';

import { AuthService } from '../../components/auth/auth.service';
import { UsersService } from './users.service';

import { TweetDialogComponent } from '../../components/tweet-dialog/tweet-dialog.component';

@Injectable()
export class TweetService {

  private dialogRef: MdDialogRef<TweetDialogComponent>;
  private user: any;

  constructor(
    private dialog: MdDialog,
    private authService: AuthService,
    private usersService: UsersService) {
  }

  getUser(): any {
    return this.user;
  }

  sendTweet(viewContainerRef: ViewContainerRef) {
    let config = new MdDialogConfig();
    config.viewContainerRef = viewContainerRef;

    // get current connected user
    let uid = this.authService.getUser().uid;
    //this.user = this.usersService.getUser(uid);
    this.user = { email: 'email@email.com' };

    this.dialogRef = this.dialog.open(TweetDialogComponent, config);

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }
}