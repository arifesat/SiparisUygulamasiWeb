export interface Order {
    id: string;
    userId: string;
    items: OrderItem[];
    orderDate: string;
    totalAmount: number;
    address: Address;
  }
  
  export interface OrderItem {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
  }
  
  export interface Address {
    street: string;
    buildingNo: string;
    doorNo: string;
    city: string;
    postalCode: string;
    country: string;
  }