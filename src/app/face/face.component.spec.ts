/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FaceComponent } from './face.component';

describe('FaceComponent', () => {
  let component: FaceComponent;
  let fixture: ComponentFixture<FaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
