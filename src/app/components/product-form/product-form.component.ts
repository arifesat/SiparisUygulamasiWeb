import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule]
})
export class ProductFormComponent {
  newProduct = {
    name: '',
    category: '',
    price: 0,
    stockQuantity: 0,
    description: '',
    imageUrl: ''
  };

  constructor(private apiService: ApiService) {}

  addProduct(): void {
    this.apiService.createProduct(this.newProduct).subscribe(
      response => {
        console.log('Product added successfully:', response);
        // Handle successful creation, like redirecting to product list
      },
      error => {
        console.error('Error adding product:', error);
      }
    );
  }
}
