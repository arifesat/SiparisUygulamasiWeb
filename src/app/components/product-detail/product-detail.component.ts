import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;  // Define the 'product' property

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('productId');
    console.log('Route parameter productId:', id);
    
    if (id !== null) {
      const productId = id; // Convert id to number
      console.log('Fetching product with id:', productId); // Debugging log
      this.productService.getProduct(id).subscribe({
        next: (product) => {
          this.product = product;
          console.log('Product fetched successfully:', product); // Debugging log
        },
        error: (err) => {
          console.error('Error fetching product:', err); // Error handling
        }
      });
    } else {
      console.error('Product ID is null'); // Handle the case where id is null
    }
  }

  goBack(): void {
    window.history.back();
  }
}
