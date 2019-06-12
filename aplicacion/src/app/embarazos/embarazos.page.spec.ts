import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbarazosPage } from './embarazos.page';

describe('EmbarazosPage', () => {
  let component: EmbarazosPage;
  let fixture: ComponentFixture<EmbarazosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbarazosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbarazosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
