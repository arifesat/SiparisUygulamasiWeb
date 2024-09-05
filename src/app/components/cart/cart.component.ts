import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  userId: string = 'user-id-here'; // Replace with the actual user ID
  productId: string = 'product-id-here'; // Replace with the actual product ID
  quantity: number = 1;

  cart: any = { items: [] };

  constructor(private apiService: ApiService) {}

  addItemToCart(): void {
    const item = { ProductId: this.productId, Quantity: this.quantity };
    this.apiService.addItemToCart(this.userId, item).subscribe({
      next: response => {
        console.log('Item added to cart:', response);
      },
      error: error => {
        console.error('Error adding item to cart:', error);
      }
    });
  }

  removeItemFromCart(productId: string): void {
    this.apiService.removeItemFromCart(this.userId, productId).subscribe({
      next: response => {
        console.log('Item removed from cart:', response);
      },
      error: error => {
        console.error('Error removing item from cart:', error);
      }
    });
  }

  clearCart(): void {
    this.apiService.clearCart(this.userId).subscribe({
      next: response => {
        console.log('Cart cleared:', response);
      },
      error: error => {
        console.error('Error clearing cart:', error);
      }
    });
  }
}
