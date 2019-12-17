import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorAbcComponent } from './calculator-abc.component';

describe('CalculatorAbcComponent', () => {
  let component: CalculatorAbcComponent;
  let fixture: ComponentFixture<CalculatorAbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorAbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorAbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
