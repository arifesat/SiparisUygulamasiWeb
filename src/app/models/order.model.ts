export interface Order {
    id: string;
    userId: string;
    items: OrderItem[];
    orderDate: Date;
    totalAmount: number;
    address: Address;
  }
  
  export interface OrderItem {
    productId: string;
    product: string;
    quantity: number;
    price: number;
  }
  
  export interface Address {
    id: string;
    userId: string;
    street: string;
    buildingNo: string;
    doorNo: string;
    city: string;
    postalCode: string;
    country: string;
  }