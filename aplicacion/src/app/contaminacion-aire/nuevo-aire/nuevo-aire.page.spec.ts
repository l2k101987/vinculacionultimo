import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAirePage } from './nuevo-aire.page';

describe('NuevoAirePage', () => {
  let component: NuevoAirePage;
  let fixture: ComponentFixture<NuevoAirePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoAirePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoAirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
