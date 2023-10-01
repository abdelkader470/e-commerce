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
}
