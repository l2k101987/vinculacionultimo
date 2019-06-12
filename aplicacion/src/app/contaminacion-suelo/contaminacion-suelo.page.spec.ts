import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaminacionSueloPage } from './contaminacion-suelo.page';

describe('ContaminacionSueloPage', () => {
  let component: ContaminacionSueloPage;
  let fixture: ComponentFixture<ContaminacionSueloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaminacionSueloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaminacionSueloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
