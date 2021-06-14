import { MyValidators } from './../../../utils/validators';
import { ProductsService } from './../../../core/services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({});
    this.buildForm();
   }

  ngOnInit(): void {
  }

  saveProduct(event: Event) {
    // se usa preventdefault para evitar las acciones por defecto de un formulario, como recargar la pagina.
    event.preventDefault();
    if(this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe(newProduct => {
        console.log(newProduct);
        this.router.navigate(['/admin/products'])
        
      });
    }
    
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['',[Validators.required]],
      title: ['',[Validators.required]],
      price: ['',[Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['',[Validators.required]],
    })
  }

  get priceField() {
    return this.form.get('price');
  }

}
