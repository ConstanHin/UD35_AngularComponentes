import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoVista2Component } from './grupo-vista2.component';

describe('GrupoVista2Component', () => {
  let component: GrupoVista2Component;
  let fixture: ComponentFixture<GrupoVista2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoVista2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoVista2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
