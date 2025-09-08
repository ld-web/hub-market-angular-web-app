import { Component, inject } from '@angular/core';
import { Product } from '../../../core/models/product';
import { HeroComponent } from '../components/hero/hero';
import { ProductListComponent } from '../components/product-list/product-list';
import { FilterSectionComponent } from '../components/filter-section/filter-section';
import { ProductService } from '../../../core/services/product-service/product';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ProductListComponent, FilterSectionComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
private service = inject(ProductService);
  // 👉 de vrais tableaux (pas des Observables)
  products: Product[] = [];
  filteredProducts: Product[] = [];

  onlyAvailable = false;

  ngOnInit() {
    this.service.getAll().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data; // on affiche tout au début
        console.log(data)
      },
      error: (err) => {
        console.error('load products failed', err);
        this.products = [];
        this.filteredProducts = [];
      },
    });
  }

  get categories(): string[] {
    return ['all', ...Array.from(new Set(this.products.map(p => p.category)))];
  }


  get likedCount() {
    return this.products.filter((p) => p.liked).length;
  }

  onLikedToggled(id: number) {
  // 1) MAJ immuable de products (nouveau tableau + nouvel objet pour l’item visé)
  this.products = this.products.map(p =>
    p.id === id ? { ...p, liked: !p.liked } : p
  );

  // 2) ⚠️ Très important : rafraîchir filteredProduct, car c'est lui que tu affiches
  this.filteredProducts = this.onlyAvailable
    ? this.products.filter(p => p.stock > 0)
    : this.products;
}
  // “version disponibles” de la liste courante
  get availableProduct(): Product[] {
    return this.filteredProducts.filter(p => p.stock > 0);
  }

  // Appelé quand l’enfant émet le changement
  onOnlyAvailableChange(checked: boolean) {
    this.onlyAvailable = checked;

    // Si coché → ne garder que les disponibles
    // Sinon → tout afficher
    this.filteredProducts = this.onlyAvailable ? this.availableProduct : this.products;
  }
}
