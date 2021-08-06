import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product.model';

fdescribe('ProductsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(ProductsService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * exite un patron para realizar test que es el AAA
   * Arrange : preparar
   * Act: actuar 
   * Assert: afirmar (resolver la hipotesis)
   * Sería como la estructura de una obra literaria: introducción, desarrollo y desenlace.
   */
  describe('test for getAllProducts', () => {
    it('Should returns products array', () => {
      //arrange
      const expectData = [
        {
          id: '1',
          title: 'lolololo',
          price: 1234,
          description: 'lalalalala',
          image: 'img/img1.jpg',
        },
        {
          id: '2',
          title: 'lelelele',
          price: 4321,
          description: 'lilililili',
          image: 'img/img2.jpg',
        }
      ]

      let dataError;
      let dataResponse!: Product[];

      //act
      service.getAllProducts()
        .subscribe((response: Product[]) => {
          dataResponse = response;
        }, error => {
          dataError = error;
        });

      const req = httpTestingController.expectOne(`${environment.url_api}/products`);
      req.flush(expectData);

      //assert
      expect(dataResponse.length).toBeLessThan(3)
      expect(req.request.method).toEqual('GET')
      expect(dataError).toBeUndefined()

    });
  });
});
