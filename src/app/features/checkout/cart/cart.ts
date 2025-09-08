// features/checkout/cart/cart.component.ts
import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../../../core/models/product';
import { CartService } from '../../../core/services/cart-service/cart-service';
import { CartItem } from '../components/cart-item/cart-item';
 // ajuste le chemin

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, CartItem],
  templateUrl: './cart.html',
})
export class Cart {
  private readonly cartService = inject(CartService);

  // Observable -> Signal pour pouvoir utiliser @if / @for
  readonly cart = toSignal<Product[]>(this.cartService.cart$, { initialValue: undefined });

  // Total en signal
  readonly total = computed(() =>
    this.cart()?.reduce((acc, p) => acc + (p.price ?? 0), 0)
  );

  onRemove(product: Product) {
    // nécessite CartService.remove(product) (cf. snippet précédent)
    this.cartService.remove(product);
  }

  clear() {
    this.cartService.clear();
  }

  // trackBy pour @for
  trackById = (p: Product) => p.id;
}
