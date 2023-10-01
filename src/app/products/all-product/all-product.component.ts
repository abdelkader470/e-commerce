import { Component, OnInit } from '@angular/core';
import { Product } from './../../product';
import { ProductServiceService } from 'src/app/product-service.service';
// import data from '../../../assets/products-list.json';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css'],
})
export class AllProductComponent {
  productsList!: any;

  constructor(private productservice: ProductServiceService) {}
  ngOnInit() {
    this.productservice.getProductList().subscribe((res: any) => {
      this.productsList = res.products;
      console.log(res);
    });
  }
}
