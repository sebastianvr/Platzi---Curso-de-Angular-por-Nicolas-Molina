import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {ProductsService} from './../../../core/services/products/products.service';
import {Product} from '../../../core/models/product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  
  // el ? hace que la propiedad sea opcional
  product? : Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
  ) {
     
   }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
    
  }

  fetchProduct(id: string) {
    this.productService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
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
    this.productService.updateProduct('333',newProduct)
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

}
