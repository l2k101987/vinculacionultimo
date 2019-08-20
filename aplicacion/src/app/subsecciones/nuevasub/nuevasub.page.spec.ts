import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevasubPage } from './nuevasub.page';

describe('NuevasubPage', () => {
  let component: NuevasubPage;
  let fixture: ComponentFixture<NuevasubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevasubPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevasubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
