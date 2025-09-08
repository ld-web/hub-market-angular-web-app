import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

@Component({
  selector: 'app-shop-layout',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './shop-layout.html',
  styleUrls: ['./shop-layout.css'],
})
export class ShopLayout {}
