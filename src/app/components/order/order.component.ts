import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  errorMessage: string = '';

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadUserOrders();
  }

  loadUserOrders(): void {
    this.orderService.getUserOrders().subscribe({
      next: (data) => {
        this.orders = data;
        console.log('Orders fetched successfully:', this.orders);
      },
      error: (error) => {
        this.errorMessage = 'Failed to load orders';
        console.error('Error loading orders:', error);
      }
    });
  }
}
