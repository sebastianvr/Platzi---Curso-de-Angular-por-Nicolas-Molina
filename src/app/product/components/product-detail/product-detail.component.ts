import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs';

import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';




@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {


  product$! : Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
  ) { }

  // implementacion de switchMap de rxjs
  ngOnInit(): void {
    this.product$ = this.route.params
    .pipe(
      switchMap((params : Params) => this.productService.getProduct(params.id)))
  }

  createProduct() {
    const newProduct: Product = {
      id: '333',
      title: 'nuevo desde angular',
      image: 'assets/images/camiseta.png',
      price: 30000,
      description: 'Nuevo producto 2'
    };
    this.productService.createProduct(newProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  updateProduct() {
    const newProduct: Partial<Product> = {
      price: 1111,
      title: 'edicion titulo'
    };
    this.productService.updateProduct('333', newProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.productService.deleteProduct('333')
      .subscribe(product => {
        console.log(product);
      });
  }

  getRndUser(){
    this.productService.getUserRandom()
      .subscribe( resp => console.log(resp))
  }
}
