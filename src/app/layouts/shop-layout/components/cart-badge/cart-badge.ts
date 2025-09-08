import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CartService } from '../../../../core/services/cart-service/cart-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-badge',
  standalone: true,
  templateUrl: 'cart-badge.html',
  styleUrl: 'cart-badge.css',
  imports:[AsyncPipe, RouterLink]
})
export class CartBadgeComponent {
  private cartService = inject(CartService);

  // le nombre d’articles (Observable<number>)
  count$ = this.cartService.cart$.pipe(
    // transform le tableau en sa taille
    map(cart => cart.length)
  );
}
