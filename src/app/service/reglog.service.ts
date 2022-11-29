import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReglogService {

  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  reglog(){
    return this.http.get<any>(this.url+`/api/auth`);
    
  }
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':' application/json'
    })
  };


}
