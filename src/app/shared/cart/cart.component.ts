import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  id!: number;
  productDatails!: any;
  constructor(
    private _details: ProductServiceService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._details.getProductDetails(this.id).subscribe((res: any) => {
      this.productDatails = res;
    });
  }
}
