import { Component } from '@angular/core';
import { CartBadgeComponent } from '../cart-badge/cart-badge';

@Component({
  selector: 'app-nav',
  imports: [CartBadgeComponent],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {}
