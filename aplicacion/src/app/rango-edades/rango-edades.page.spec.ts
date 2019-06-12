import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangoEdadesPage } from './rango-edades.page';

describe('RangoEdadesPage', () => {
  let component: RangoEdadesPage;
  let fixture: ComponentFixture<RangoEdadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangoEdadesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangoEdadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
