import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { PaymentConfirmationDialogComponent } from '../payment-confirmation-dialog/payment-confirmation-dialog.component';
import { ProductoModel } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    MatInputModule, MatCardModule, MatButtonModule, MatListModule, 
    MatSelectModule, MatCheckboxModule, ReactiveFormsModule
  ],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  productos: ProductoModel[] = [];
  precioFinal = 0;
  paymentForm: FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder, private dialog: MatDialog) {
    this.paymentForm = this.fb.group({
      paymentType: [''],
      paymentNumber: [''],
      isGift: ['no'],
      priorityShipping: [false],
    });
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      data => {
        this.productos = data;
        this.calcularTotal();
      },
      error => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  calcularTotal(): void {
    this.precioFinal = this.productos.reduce((sum, producto) => sum + producto.precio, 0);
  }

  submitPayment() {
    if (this.paymentForm.valid) {
      console.log("Datos de pago:", this.paymentForm.value);

      // Abre el diálogo de confirmación
      this.dialog.open(PaymentConfirmationDialogComponent, {
        data: { message: 'Pago realizado con éxito' },
        width: '300px',
      });
    } else {
      console.log("Por favor complete todos los campos requeridos.");
    }
  }
}
