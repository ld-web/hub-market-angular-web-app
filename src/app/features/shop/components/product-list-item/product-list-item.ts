import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockStatusPipe } from '../../../../shared/pipes/stock-status-pipe';
import { LikeButton } from '../like-button/like-button';
import { CartService } from '../../../../core/services/cart-service/cart-service';
import { RouterLink } from '@angular/router';
import { Product } from '../../../../core/models/product';

@Component({
  selector: 'app-product-list-item',
  imports: [CommonModule, StockStatusPipe, LikeButton, RouterLink],
  templateUrl: './product-list-item.html',
  styleUrl: './product-list-item.css',
})
export class ProductListItemComponent {
  @Input() product!: Product;
  @Output() like = new EventEmitter<number>(); // émet l'id du produit

  onLikeClick() {
    this.like.emit(this.product.id);
  }

  private cartService = inject(CartService);

  onAddToCart(product: Product) {
    this.cartService.add(product);
  }
}
