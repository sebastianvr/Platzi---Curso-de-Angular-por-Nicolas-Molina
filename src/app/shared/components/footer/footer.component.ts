import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor() {
    //el primer '' sirve para inicializar el formcontrol con un valor.
    //el array [] sirve para decir que validaciones quiero.
    this.emailField = new FormControl('',[
      Validators.required,
      Validators.email
    ]);
    // this.emailField.valueChanges
    // .subscribe(value => {
    //   console.log(value);
    // });

   }

  ngOnInit(): void {
  }

  sendMail() {
    if(this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }

}
