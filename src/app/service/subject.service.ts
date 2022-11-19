import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  listSubject(){
    return this.http.get<any>(this.url+'/api/subjects');
    
  }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':' application/json'
    })
  };

  addSubject(subject:string): Observable<string>{
    return this.http.post<any>
    (this.url+`/api/subjects`,subject,this.httpOptions);
  }
}
