import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:7013/api'; // Update with your actual API URL

  constructor(private http: HttpClient) {}

  // Address Endpoints
  getAddresses(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/address/${userId}`);
  }

  addAddress(userId: string, address: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/address/${userId}`, address);
  }

  updateAddress(userId: string, address: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/address/${userId}`, address);
  }

  deleteAddress(userId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/address/${userId}`);
  }

  // Order Endpoints
  getOrder(orderId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/order/${orderId}`);
  }

  getOrdersByUserId(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/order/user/${userId}`);
  }

  createOrder(order: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/order`, order);
  }

  updateOrder(orderId: string, order: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/order/${orderId}`, order);
  }

  deleteOrder(orderId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/order/${orderId}`);
  }

  // Product Endpoints
  getProduct(id: string): Observable<any> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/products`, product);
  }

  updateProduct(productId: string, product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/Products/${productId}`, product);
  }

  deleteProduct(productId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/products/${productId}`);
  }

  // Shopping Cart Endpoints
  getCart(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/shoppingcart/${userId}`);
  }

  addItemToCart(userId: string, item: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/shoppingcart/${userId}/items`, item);
  }

  removeItemFromCart(userId: string, productId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/shoppingcart/${userId}/items/${productId}`);
  }

  clearCart(userId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/shoppingcart/${userId}`);
  }

  // User Endpoints
  getUser(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user`, user);
  }

  updateUser(userId: string, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/${userId}`, user);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user/${userId}`);
  }

  loginUser(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/LoginUser`, credentials);
  }

  logoutUser(): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/logout`, {});
  }
}
