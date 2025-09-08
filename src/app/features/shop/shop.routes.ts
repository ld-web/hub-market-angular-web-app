import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProductDetail } from './product-detail/product-detail';

export const SHOP_ROUTES: Routes = [
  { path: '', component: Home, title: 'Accueil - Hub Market' }, // /shop
  { path: 'product/:id', component: ProductDetail, title: 'Produit - Hub Market' }, // /shop/123
];
