import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ProductEditComponent implements OnInit {
  productId: any;
  productData: any = {};

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.apiService.getProduct(this.productId).subscribe(
      data => {
        this.productData = data;
      },
      error => {
        console.error('Error fetching product:', error);
      }
    );
  }

  updateProduct(): void {
    this.apiService.updateProduct(this.productId, this.productData).subscribe(
      response => {
        console.log('Product updated successfully:', response);
        // Handle successful update, like redirecting to product details
      },
      error => {
        console.error('Error updating product:', error);
      }
    );
  }
}
