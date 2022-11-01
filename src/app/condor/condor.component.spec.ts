import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondorComponent } from './condor.component';

describe('CondorComponent', () => {
  let component: CondorComponent;
  let fixture: ComponentFixture<CondorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
