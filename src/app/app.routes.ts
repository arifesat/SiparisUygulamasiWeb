import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { OrdersComponent } from './components/order/order.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'Product/:productId', component: ProductDetailComponent },
  { path: 'Order', component: OrdersComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'AddProduct', component: ProductFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
