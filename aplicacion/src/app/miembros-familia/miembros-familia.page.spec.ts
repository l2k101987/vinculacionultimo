import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembrosFamiliaPage } from './miembros-familia.page';

describe('MiembrosFamiliaPage', () => {
  let component: MiembrosFamiliaPage;
  let fixture: ComponentFixture<MiembrosFamiliaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiembrosFamiliaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiembrosFamiliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
