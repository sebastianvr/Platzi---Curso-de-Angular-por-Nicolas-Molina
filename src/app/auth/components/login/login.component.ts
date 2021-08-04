import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private as: AuthService
  ) {
    this.form = this.formBuilder.group({});
    this.buildForm();
  }

  ngOnInit() {
  }

  login(event: Event) {
    event.preventDefault();
    console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  loginApi() {
    this.as.loginApi('test1@test.com', '1234556')
      .subscribe(respuesta => {
        console.log(respuesta)
      })
  }

}
