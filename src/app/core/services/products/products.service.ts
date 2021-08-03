import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface User {
  email: string,
  gender: string,
  phone: string,
}

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
  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(`${environment.url_api}/products`, product)
  }
  // Partial me permite enviar solo una parte del objeto product, en caso de querer cambiar solamente el titulo por ejemplo. 
  //De esta forma, no es necesario enviar el objeto tipo producto completo.
  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put<Product>(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }

  getUserRandom(): Observable<User[]> {
    return this.http.get<any>('https://randomuser.me/api/asdasdas?resultasdasds=2sdasd')
      .pipe(
        catchError(error => throwError(this.handleError)),
        map(response => response.results as User[]),
      )
  }

  private handleError(error : HttpErrorResponse){
    console.log(error)
    return throwError('algo salió mal')
  }

}
