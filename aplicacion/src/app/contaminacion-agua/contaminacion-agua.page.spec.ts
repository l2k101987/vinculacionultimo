import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaminacionAguaPage } from './contaminacion-agua.page';

describe('ContaminacionAguaPage', () => {
  let component: ContaminacionAguaPage;
  let fixture: ComponentFixture<ContaminacionAguaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaminacionAguaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaminacionAguaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
