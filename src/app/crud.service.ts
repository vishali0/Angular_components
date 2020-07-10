import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // show(id: String) {
  //   throw new Error("Method not implemented.");
  // }

  constructor(private http: HttpClient) { }
  public getData(): Observable<object> {
    return this.http.get("https://5f047dac8b06d60016ddebce.mockapi.io/api/blog")
  }

  public show(count): Observable<object> {
    return this.http.get("https://5f047dac8b06d60016ddebce.mockapi.io/api/blog/?page=" + count + "&limit=10")
  }
}
