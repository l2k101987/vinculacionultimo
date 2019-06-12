import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaminacionAirePage } from './contaminacion-aire.page';

describe('ContaminacionAirePage', () => {
  let component: ContaminacionAirePage;
  let fixture: ComponentFixture<ContaminacionAirePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaminacionAirePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaminacionAirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
