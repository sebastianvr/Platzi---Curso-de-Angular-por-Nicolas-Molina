import { Component, OnInit } from '@angular/core';
import {Product} from '../../../core/models/product.model';
import {ActivatedRoute, Params} from '@angular/router';

import {ProductsService} from '../../../core/services/products/products.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) =>{
    //   this.products = this.productService.getAllProducts();
    // })
    this.fetchProducts();
  }


  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProducts() {
    this.productService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    })
  }

}
