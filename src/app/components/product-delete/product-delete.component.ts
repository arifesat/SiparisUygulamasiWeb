import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ProductDeleteComponent implements OnInit {
  productId: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
  }

  deleteProduct(): void {
    this.apiService.deleteProduct(this.productId).subscribe(
      response => {
        console.log('Product deleted successfully:', response);
        // Handle successful deletion, like redirecting to product list
      },
      error => {
        console.error('Error deleting product:', error);
      }
    );
  }
}
