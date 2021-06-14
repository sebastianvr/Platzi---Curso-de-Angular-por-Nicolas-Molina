import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import {Product} from '../../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }
  


  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }
  getProduct(id:string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(`${environment.url_api}/products`, product)
  }
  // Partial me permite enviar solo una parte del objeto product, en caso de querer cambiar solamente el titulo por ejemplo. 
  //De esta forma, no es necesario enviar el objeto tipo producto completo.
  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put<Product>(`${environment.url_api}/products/${id}`,changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
