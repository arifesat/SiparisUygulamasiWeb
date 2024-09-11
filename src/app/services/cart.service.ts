import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://localhost:7013/api/ShoppingCart';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserCart(): Observable<Cart> {
    const userId = this.authService.getUserId();
    console.log('Fetching cart for user ID:', userId);
    if (userId) {
      return this.http.get<Cart>(`${this.apiUrl}/${userId}`);
    } else {
      throw new Error('User ID not found');
    }
  }

  addItemToCart(userId: string, item: Partial<CartItem>): Observable<Cart> {
    return this.http.post<Cart>(`${this.apiUrl}/user/${userId}/items`, item);
  }

  removeItemFromCart(userId: string, productId: string): Observable<Cart> {
    return this.http.delete<Cart>(`${this.apiUrl}/user/${userId}/items/${productId}`);
  }

  clearCart(userId: string): Observable<Cart> {
    return this.http.delete<Cart>(`${this.apiUrl}/user/${userId}/items`);
  }
}
