// src/app/models/cart.model.ts
export interface Cart {
    id: string;
    userId: string;
    status: string;
    totalAmount: number;
    items: CartItem[];
  }
  
  export interface CartItem {
    id: string;
    productId: string;
    product: string;
    quantity: number;
    price: number;
    totalPrice: number;
  }