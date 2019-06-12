import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposPriorizadosPage } from './grupos-priorizados.page';

describe('GruposPriorizadosPage', () => {
  let component: GruposPriorizadosPage;
  let fixture: ComponentFixture<GruposPriorizadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposPriorizadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposPriorizadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
