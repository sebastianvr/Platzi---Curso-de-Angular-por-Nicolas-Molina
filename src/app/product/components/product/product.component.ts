import { CartService } from './../../../core/services/cart.service';
import {Component, Input, Output, EventEmitter} from '@angular/core';

import { Product } from './../../../core/models/product.model';



// los decoradores me dicen el rol de la 'pagina', como @Component
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {

    constructor(
        private cartService: CartService
    ){
        this.product = Input();
        // this.productClicked = Output();
        this.productClicked = new EventEmitter();
    }

   @Input() product: Product;
   @Output() productClicked: EventEmitter<any>;

   today = new Date();

   addCart() {
       console.log('agregar al carrito');
       this.cartService.addCart(this.product);
      // this.productClicked.emit(this.product.id);

   }


}
