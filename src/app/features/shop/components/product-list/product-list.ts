import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductListItemComponent } from '../product-list-item/product-list-item';
import { Product } from '../../../../core/models/product';

@Component({
  selector: 'app-product-list',
  imports: [ProductListItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
@Input() products!: Product[]

@Output() likedToggled = new EventEmitter<number>();
}
