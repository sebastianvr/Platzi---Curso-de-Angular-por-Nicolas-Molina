import { map } from 'rxjs/operators';
import { CartService } from './../../../core/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { pipe, Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;

  constructor(
    private cartService: CartService
  ) {
      // map aplica una función de su elección a cada elemento emitido por la fuente Observable y devuelve un observable que emite los resultados de estas aplicaciones de función.
      // Pipe es una función que recibe un observable y lo opera devolviendo otro observable.
     this.total$ = this.cartService.cart$
      .pipe(
        map(products => products.length),
        
      )
      // En este punto, llegan los datos transformados por el pipe map, por lo que recibiremos solamente el total de productos.
      // .subscribe(total => {
      //   this.total = total;
      // });
   }

  ngOnInit(): void {
  }

}
