import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html'
})
export class AuthFormComponent implements OnInit, OnChanges {
  @Input() user: any;
  @Input() button: string;
  @Input() message: string;
  @Output() onSubmit = new EventEmitter();

  constructor() {
  }

  submitForm(): void {
    this.onSubmit.emit({
      user: this.user
    });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      this.user = this.user;
      // TODO danaya realmente hay que hacer una copia? angular.copy(this.user)
    }
  } 

}