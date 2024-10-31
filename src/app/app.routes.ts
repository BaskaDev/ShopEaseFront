import { Routes } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductosComponent } from './product-list/product-list.component';

export const routes: Routes = [
  {
    path: '',
    component: RegisterFormComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterFormComponent,
  },
  {
    path: 'menu',
    component: ProductosComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  }

 
 
];
