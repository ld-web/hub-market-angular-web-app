import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NavLink } from '../nav-link/nav-link';
import { CartBadgeComponent } from '../cart-badge/cart-badge';

@Component({
  selector: 'app-nav',
  imports: [NavLink, CartBadgeComponent],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

}
