import { Routes } from '@angular/router';
import { Cart } from './cart/cart';

export const CHECKOUT_ROUTES: Routes = [
  { path: '', component: Cart,  title: 'Mon Panier - Hub Market' }, // /cart
];
