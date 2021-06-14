import { CartService } from './../../../core/services/cart.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';


@Pipe({
  name: 'repeatProduct'
})
export class RepeatProductPipe implements PipeTransform {

  

  constructor(private cartService: CartService){
  }

  transform(products: object[]): any {

    const ProductsList:  object[] = [];

    // for (const product of products) {
    //   // ProductsList.push({...product, count});
    //   //var countProduct: any = ProductsList.find(prod => prod === product);
    //   var countProduct: any = products.find(prod => prod === product);
    //   console.log('countproduct');
    //   console.log(countProduct);
      
      
    //   if(typeof(countProduct) !== 'undefined') {
    //     countProduct.count++;
    //   }else {
    //     ProductsList.push({...product,count: 1});
    //     // console.log('ProductsList');
    //     // console.log(ProductsList);
        
    //   }
    // }


    //return console.log(countProduct);
    
  }

}
