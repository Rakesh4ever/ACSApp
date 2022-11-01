import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FfcComponent } from './ffc.component';

describe('FfcComponent', () => {
  let component: FfcComponent;
  let fixture: ComponentFixture<FfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FfcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
