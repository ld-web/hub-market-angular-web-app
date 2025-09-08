// features/checkout/components/cart-item/cart-item.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../../../core/models/product';


@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-item.html',
})
export class CartItem {
  @Input({ required: true }) product!: Product;
  @Output() remove = new EventEmitter<Product>();

  onRemove() {
    this.remove.emit(this.product);
  }
}
