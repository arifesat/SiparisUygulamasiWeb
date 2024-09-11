import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model'; // Assume you have an Order model
import { AuthService } from './auth.service'; // To get logged-in user info

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://localhost:7013/api/Order'; // Update this URL if necessary

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserOrders(): Observable<Order[]> {
    const userId = this.authService.getUserId(); // Assume this method exists in AuthService
    if (userId) {
      return this.http.get<Order[]>(`${this.apiUrl}/user/${userId}`);
    } else {
      console.log(userId);
      throw new Error('User ID not found ' + userId);
    }
  }
}