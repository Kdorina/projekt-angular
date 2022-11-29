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
    return this.http.get<any>(this.url+`/api/subjects`);
    
  }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':' application/json'
    })
  };

  add(subject:string): Observable<string>{
    return this.http.post<any>
    (this.url+`/api/subjects/`+subject,this.httpOptions);
  }
  find(id:number): Observable<any> {
    return this.http.get(this.url+`/api/subject/`+id);
  }

  update(id: number, subject: string): Observable<any> {
    return this.http.post(this.url+ `/api/subject/`+id, subject, this.httpOptions);
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(this.url+ `/api/subject/`+id, this.httpOptions);
  }
}
