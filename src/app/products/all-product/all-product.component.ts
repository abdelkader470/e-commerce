import { Component } from '@angular/core';
import { Product } from './../../product';
import data from '../../../assets/products-list.json';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css'],
})
export class AllProductComponent {
  products: Array<Product> = data;
}
