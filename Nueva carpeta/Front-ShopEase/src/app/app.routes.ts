import { Routes } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProductListComponent } from './product-list/product-list.component';

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
    component: ProductListComponent
  },
];
