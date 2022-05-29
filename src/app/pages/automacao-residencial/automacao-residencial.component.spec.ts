import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomacaoResidencialComponent } from './automacao-residencial.component';

describe('AutomacaoResidencialComponent', () => {
  let component: AutomacaoResidencialComponent;
  let fixture: ComponentFixture<AutomacaoResidencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomacaoResidencialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomacaoResidencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
