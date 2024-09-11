import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart | null = null;
  productId: string = ''; // Add appropriate initialization
  quantity: number = 1; // Add appropriate initialization
  userId: string | null = null;

  constructor(private cartService: CartService, private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.getUserCart().subscribe({
      next: (cart) => {
        this.cart = cart;
        this.userId = cart.userId; // Store the userId for later use
        console.log('Cart fetched successfully:', cart);
      },
      error: (err) => {
        console.error('Error fetching cart:', err);
      }
    });
  }

  addItemToCart(): void {
    if (!this.userId) {
      console.error('User ID not found');
      return;
    }
    const item = { productId: this.productId, quantity: this.quantity };
    this.cartService.addItemToCart(this.userId, item).subscribe({
      next: response => {
        console.log('Item added to cart:', response);
        this.loadCart(); // Reload the cart to reflect changes
      },
      error: error => {
        console.error('Error adding item to cart:', error);
      }
    });
  }

  removeItemFromCart(productId: string): void {
    if (!this.userId) {
      console.error('User ID not found');
      return;
    }
    this.cartService.removeItemFromCart(this.userId, productId).subscribe({
      next: response => {
        console.log('Item removed from cart:', response);
        this.loadCart(); // Reload the cart to reflect changes
      },
      error: error => {
        console.error('Error removing item from cart:', error);
      }
    });
  }

  clearCart(): void {
    if (!this.userId) {
      console.error('User ID not found');
      return;
    }
    this.cartService.clearCart(this.userId).subscribe({
      next: response => {
        console.log('Cart cleared:', response);
        this.loadCart(); // Reload the cart to reflect changes
      },
      error: error => {
        console.error('Error clearing cart:', error);
      }
    });
  }
}
