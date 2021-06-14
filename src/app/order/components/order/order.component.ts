import { Observable } from 'rxjs';
import { CartService } from './../../../core/services/cart.service';
import { Product } from './../../../core/models/product.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;


  displayedColumns: string[] = ['product', 'title', 'quantity', 'price'];

  constructor(
    private cartService: CartService
  ) {
     this.products$ = this.cartService.cart$;
   }

  ngOnInit(): void {
  }


}
