import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        console.log('Products fetched successfully:', products); // Debugging log
      },
      error: (err) => {
        console.error('Error fetching products:', err); // Error handling
      }
    });
  }
}
