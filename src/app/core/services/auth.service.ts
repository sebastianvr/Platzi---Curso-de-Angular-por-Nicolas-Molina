import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private http: HttpClient
  ) { }

  createUser(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  loginApi(email: string, password: string){
    return this.http.post('https://platzi-store.herokuapp.com/auth', {
      email,
      password
    })
  }
}
