import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictPage } from './restrict.page';

describe('RestrictPage', () => {
  let component: RestrictPage;
  let fixture: ComponentFixture<RestrictPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
