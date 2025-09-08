import { Routes } from '@angular/router';
import { ShopLayout } from './layouts/shop-layout/shop-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { CheckoutLayout } from './layouts/checkout-layout/checkout-layout';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  // SHOP
  {
    path: '',
    component: ShopLayout,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/shop/shop.routes').then(m => m.SHOP_ROUTES),
      },
    ],
  },

  // AUTH
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES),
      },
    ],
  },

  // CHECKOUT
  {
    path: 'cart',
    component: CheckoutLayout,
    canActivate: [authGuard], // ✅ protection
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/checkout/checkout.routes').then(m => m.CHECKOUT_ROUTES),
      },
    ],
  },

  { path: '**', redirectTo: '' },
];
