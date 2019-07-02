import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructPage } from './construct.page';

describe('ConstructPage', () => {
  let component: ConstructPage;
  let fixture: ComponentFixture<ConstructPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
