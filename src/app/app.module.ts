import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
  ],
  imports: [
    ProductFormComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    LoginComponent,
    ProductListComponent,
    BrowserModule,
    CartComponent,
    FormsModule,
    RouterModule.forRoot(routes),
    CommonModule,
    HttpClientModule
  ],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  // bootstrap: [AppComponent]
})
export class AppModule {}
