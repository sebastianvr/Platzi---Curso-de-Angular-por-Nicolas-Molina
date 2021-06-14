import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  //se inicializa en vacio []. Quiere decir que parte con 0 productos.
  //BehjaviorSubject solo contiene su ultimo valor. No va guardando los valores anteriores.
  private cart = new BehaviorSubject<Product[]>([]);

  // Variable tipo observable para que cualquiera se suscriba y obtenga los cambios en tiempo real. 
  // Los Observables son el equivalente a los callbacks en javascript.
  /* Ejemplo: Tenemos una función que necesita llamar a un archivo de la web y a partir de la obtención del archivo utilizarlo en otra función.
    La función que va a pedir el archivo no lo va a encontrar ya que lo pedira antes de que el archivo se carge por completo (se demora en descargarse o en obtener los datos) y necesitamos que lo pida una vez haya cargado
    por completo.
    */
  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product) {
    this.products = [...this.products, product];
    //Con next le doy un valor a cart (que es de tipo behaviorSubject)
    this.cart.next(this.products);
  }
}
