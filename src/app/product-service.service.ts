import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private _HttpClient: HttpClient) {}

  getProductList() {
    return this._HttpClient.get(' https://dummyjson.com/products');
  }
  getProductDetails(id: number) {
    return this._HttpClient.get(` https://dummyjson.com/products/${id}`);
  }
  private cart: Product[] = [];

  addToCart(product: Product) {
    const existingProduct = this.cart.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1; // Increase quantity if the product is already in the cart
    } else {
      product.quantity = 1; // Set quantity to 1 if the product is not in the cart
      this.cart.push(product);
    }
  }

  getCartItems() {
    return this.cart;
  }
  increaseQuantity(item: Product) {
    const product = this.cart.find((p) => p.id === item.id);
    if (product) {
      product.quantity += 1;
    }
  }

  decreaseQuantity(item: Product) {
    const product = this.cart.find((p) => p.id === item.id);
    if (product && product.quantity > 1) {
      product.quantity -= 1;
    } else if (product && product.quantity === 1) {
      this.cart = this.cart.filter((p) => p.id !== item.id);
    }
  }
  removeFromCart(item: Product) {
    const index = this.cart.findIndex((p) => p.id === item.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }
}
