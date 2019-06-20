import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoSueloPage } from './nuevo-suelo.page';

describe('NuevoSueloPage', () => {
  let component: NuevoSueloPage;
  let fixture: ComponentFixture<NuevoSueloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoSueloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoSueloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
