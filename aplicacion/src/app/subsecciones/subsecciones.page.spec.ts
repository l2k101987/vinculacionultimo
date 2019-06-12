import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubseccionesPage } from './subsecciones.page';

describe('SubseccionesPage', () => {
  let component: SubseccionesPage;
  let fixture: ComponentFixture<SubseccionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubseccionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubseccionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
