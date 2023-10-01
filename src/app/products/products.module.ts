import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductComponent } from './all-product/all-product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AllProductComponent,
    ProductCardComponent,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [AllProductComponent],
})
export class ProductsModule {}
