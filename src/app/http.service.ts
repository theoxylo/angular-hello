import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, map, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import { AjaxResult } from './ajaxResult';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getContent(url: string): Promise<Response> {
    return fetch(url);
  }

  getContent2(url: string): Observable<AjaxResult> {
    return this.http.get<AjaxResult>(url).pipe(
      retry(3),
      tap(result => console.log(result)),
      catchError(error => {
        console.log(`error: ${error.message}`);
        const result = new AjaxResult();
        result.title = `[error ${error.status}]`;
        return of(result);
      })
    );
  }
}
