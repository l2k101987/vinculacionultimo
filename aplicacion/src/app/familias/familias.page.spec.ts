import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliasPage } from './familias.page';

describe('FamiliasPage', () => {
  let component: FamiliasPage;
  let fixture: ComponentFixture<FamiliasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
