import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReglogService {

  
  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

   // Login
   login(email: string, password: string) {
    return this.http.post('http://localhost:8000/api/login', {
      email: email,
      password: password,
    });
  }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':' application/json'
    })
  };


}
