import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AngularFireAuth } from '@angular/fire/auth';
import { TokenService } from './token.service';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  createUser(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  loginApi(email: string, password: string) {
    return this.http.post('https://platzi-store.herokuapp.com/auth', {
      email,
      password
    })
      .pipe(
        tap((data: any) => {
          const token = data.token;
          this.tokenService.saveToken(token);
        })
      )
  }


}
