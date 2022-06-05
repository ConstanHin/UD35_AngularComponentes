import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoVista1Component } from './grupo-vista1.component';

describe('GrupoVista1Component', () => {
  let component: GrupoVista1Component;
  let fixture: ComponentFixture<GrupoVista1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoVista1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoVista1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
