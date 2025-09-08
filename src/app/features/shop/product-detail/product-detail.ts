import { toSignal } from '@angular/core/rxjs-interop';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../../core/services/product-service/product';
import { CartService } from '../../../core/services/cart-service/cart-service';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../../core/models/product';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
private route = inject(ActivatedRoute);
  private products = inject(ProductService);
  private cart = inject(CartService);

  // 1) On lit l'id dans l'URL, 2) on appelle le service getOne(id)
  private product$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    switchMap(id => this.products.getOne(id)) // renvoie Observable<Product | null>
  );

  // Signal pour utiliser @if/@else dans le template :
  // undefined = chargement, null = introuvable, Product = succès
  product = toSignal<Product | null | undefined>(this.product$, {
    initialValue: undefined,
  });

  addToCart(p: Product) {
    this.cart.add(p);
  }
}
