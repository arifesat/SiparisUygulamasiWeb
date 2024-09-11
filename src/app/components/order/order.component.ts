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
      },
      error: (error) => {
        this.errorMessage = 'Failed to load orders';
        console.error('Error loading orders:', error);
      }
    });
  }
}

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { ApiService } from '../../services/api.service';
// import { Order } from '../../models/order.model';

// @Component({
//   selector: 'app-order',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './order.component.html',
//   styleUrl: './order.component.scss'
// })
// export class OrderComponent {
//   orders: Order[] = [];
  
//   constructor(private apiService: ApiService) {}

//   ngOnInit(): void {
//     this.apiService.getOrder(this.orders.id).subscribe({
//       next: order => {
//         this.orders = order;
//         console.log('Orders fetched successfully:', order); // Debugging log
//       },
//       error: err => {
//           console.error('Error fetching orders:', err); // Error handling
//       }
//     });
//   }
// }
