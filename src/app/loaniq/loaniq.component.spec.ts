import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaniqComponent } from './loaniq.component';

describe('LoaniqComponent', () => {
  let component: LoaniqComponent;
  let fixture: ComponentFixture<LoaniqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaniqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaniqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
