import { Product } from './../../product';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import data from '../../../assets/products-list.json';
import { ProductServiceService } from 'src/app/product-service.service';
ProductServiceService;
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  activId!: number;
  products!: any;
  productData!: any;

  constructor(
    private ActivedRout: ActivatedRoute,
    private _list: ProductServiceService
  ) {}
  ngOnInit() {
    this.activId = this.ActivedRout.snapshot.params['id'];
    this._list.getProductDetails(this.activId).subscribe((res: any) => {
      this.productData = res;
    });
    console.log(this.productData);
  }
}
