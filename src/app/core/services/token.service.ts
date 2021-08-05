import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(){
    return localStorage.getItem('token');
  }

  saveToken(token: string){
    localStorage.setItem('token', token)
  }
}
