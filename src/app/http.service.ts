import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, map, tap} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getContent(url: string): Promise<Response> {
    return fetch(url);
  }

  getContent2(url: string) {
    return this.http.get(url).pipe(
      retry(3),
      catchError(error => {
        console.log(`error: ${error.message}`);
        return of({title: `[error ${error.status}]`});
      })
    );
  }
}
