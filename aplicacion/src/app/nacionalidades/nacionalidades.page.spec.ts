import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionalidadesPage } from './nacionalidades.page';

describe('NacionalidadesPage', () => {
  let component: NacionalidadesPage;
  let fixture: ComponentFixture<NacionalidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NacionalidadesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NacionalidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
