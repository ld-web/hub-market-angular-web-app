import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../../models/product';


@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly baseUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  // Récupère toute la liste
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      // En cas d’erreur → on renvoie un tableau vide (fallback sûr pour l’UI)
      catchError((err: HttpErrorResponse) => {
        console.error('getAll() failed:', err);
        return of([] as Product[]);
      })
    );
  }

  // Récupère un produit par id
  getOne(id: number): Observable<Product | null> {
    if (Number.isNaN(id)) return of(null); // garde-fou si l’URL est invalide
    return this.http.get<Product>(`${this.baseUrl}/${id}`).pipe(
      // En cas d’erreur (404, réseau, etc.) → on renvoie null (pratique pour @if introuvable)
      catchError((err: HttpErrorResponse) => {
        console.error(`getOne(${id}) failed:`, err);
        return of(null);
      })
    );
  }
}
