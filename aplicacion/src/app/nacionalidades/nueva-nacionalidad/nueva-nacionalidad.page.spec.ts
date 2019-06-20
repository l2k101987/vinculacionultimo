import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaNacionalidadPage } from './nueva-nacionalidad.page';

describe('NuevaNacionalidadPage', () => {
  let component: NuevaNacionalidadPage;
  let fixture: ComponentFixture<NuevaNacionalidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaNacionalidadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaNacionalidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
