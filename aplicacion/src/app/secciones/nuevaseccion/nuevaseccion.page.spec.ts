import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaseccionPage } from './nuevaseccion.page';

describe('NuevaseccionPage', () => {
  let component: NuevaseccionPage;
  let fixture: ComponentFixture<NuevaseccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaseccionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaseccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
