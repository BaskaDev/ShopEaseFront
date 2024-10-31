import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentConfirmationDialogComponent } from './payment-confirmation-dialog.component';

describe('PaymentConfirmationDialogComponent', () => {
  let component: PaymentConfirmationDialogComponent;
  let fixture: ComponentFixture<PaymentConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentConfirmationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
