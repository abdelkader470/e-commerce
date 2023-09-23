import { Product } from './../../product';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../../assets/products-list.json';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  activId!: number;
  products: Product[] = data;
  productData!: any;

  constructor(private ActivedRout: ActivatedRoute) {}
  ngOnInit() {
    this.activId = this.ActivedRout.snapshot.params['id'];
    this.productData = this.products.find(
      (product) => product.id == this.activId
    );
    console.log(this.productData);
  }
}
