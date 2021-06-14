import { MyValidators } from './../../../utils/validators';
import { ProductsService } from './../../../core/services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({});
    this.buildForm();
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id)
      .subscribe(product => {
        // Con patchValue reemplazo cualquier propiedad definida en form.
        //En este caso le estoy pasando un objeto tipo producto, con el fin de definirle su id, title, etc (segun el id del producto seleccionado).
        this.form.patchValue(product);
        console.log('PRODUCTO');
        console.log(this.form.value);
        
        
      });
    });
  }

  saveProduct(event: Event) {
    // se usa preventdefault para evitar las acciones por defecto de un formulario, como recargar la pagina.
    event.preventDefault();
    if(this.form.valid) {
      const product = this.form.value;
      this.productsService.updateProduct(this.id,product)
      .subscribe(newProduct => {
        console.log(newProduct);
        this.router.navigate(['/admin/products'])
        
      });
    }
    
  }

  private buildForm() {
    this.form = this.formBuilder.group({
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
