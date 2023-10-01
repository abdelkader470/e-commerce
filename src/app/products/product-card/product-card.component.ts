import { Component, Input } from '@angular/core';
import { Product } from '../../product';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/product-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  constructor(
    private _Router: Router,
    private _details: ProductServiceService
  ) {}
  @Input() product!: Product;
  goToDetails(id: number) {
    this._Router.navigate(['productDetails', id]);
  }
  addToCart(id: number) {
    this._Router.navigate(['mycart', id]);
  }
}
