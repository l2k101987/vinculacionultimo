import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionesSistemaPage } from './instituciones-sistema.page';

describe('InstitucionesSistemaPage', () => {
  let component: InstitucionesSistemaPage;
  let fixture: ComponentFixture<InstitucionesSistemaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitucionesSistemaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitucionesSistemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
