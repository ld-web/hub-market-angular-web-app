import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../models/product';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  // état interne du panier
  private readonly _cart$ = new BehaviorSubject<Product[]>([]);

  // exposé en lecture seule (Observable)
  readonly cart$ = this._cart$.asObservable();

  // Getter pratique 
  get cart(): Product[] {
    return this._cart$.value;
  }

  // ajouter un produit
  add(product: Product) {
    const updated = [...this.cart, product];
    this._cart$.next(updated);
  }

  // supprimer un produit du panier
remove(product: Product) {
  // si Product a un id
  const updated = this.cart.filter(p => p.id !== product.id);
  this._cart$.next(updated);
}


  // vider le panier
  clear() {
    this._cart$.next([]);
  }
}

