import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaynowComponent } from './paynow.component';

describe('PaynowComponent', () => {
  let component: PaynowComponent;
  let fixture: ComponentFixture<PaynowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaynowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
