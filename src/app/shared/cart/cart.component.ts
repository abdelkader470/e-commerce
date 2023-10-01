import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductServiceService } from 'src/app/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  id!: number;
  totalPrice: number = 0;
  productDatails!: any;
  cartItems: Product[] = [];

  constructor(
    private _details: ProductServiceService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.cartItems = this._details.getCartItems();
    this.calculateTotalPrice();
  }
  increaseQuantity(item: Product) {
    this._details.increaseQuantity(item);
    this.calculateTotalPrice();
  }

  decreaseQuantity(item: Product) {
    this._details.decreaseQuantity(item);
    this.calculateTotalPrice();
  }
  removeFromCart(item: Product) {
    this._details.removeFromCart(item);
    this.cartItems = this._details.getCartItems();
    this.calculateTotalPrice();
  }
  private calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  ngOnInit() {}
}
