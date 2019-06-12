import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRespuestaAntFamiliaresPage } from './detalle-respuesta-ant-familiares.page';

describe('DetalleRespuestaAntFamiliaresPage', () => {
  let component: DetalleRespuestaAntFamiliaresPage;
  let fixture: ComponentFixture<DetalleRespuestaAntFamiliaresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleRespuestaAntFamiliaresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRespuestaAntFamiliaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
