import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:7013/api/Products'; // URL to web api

  constructor(private http: HttpClient) { }

  getProduct(id: string): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }
}

// product.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  // other fields
}

//   private products: Product[] = [
//     { id: '1', name: 'Product 1', description: 'Description 1', price: 100 },
//     { id: '2', name: 'Product 2', description: 'Description 2', price: 200 },
//     // Add more products as needed
//   ];

//   constructor() {}

//   getProduct(id: string): Observable<Product> {
//     const product = this.products.find(p => p.id === id);
//     return of(product as Product);
//   }

//   getProducts(): Observable<Product[]> {
//     return of(this.products);
//   }
// }
