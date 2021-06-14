import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductsService} from './services/products/products.service';

// es una buena practica meter los servicios de datos en el core module
// los componentes, pipes y directivas se meten en el shared module.
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductsService
  ]
})
export class CoreModule { }
