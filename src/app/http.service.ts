import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, retry, map, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {IMessage} from './message';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getContent(url: string): Promise<Response> {
    return fetch(url);
  }

  getContent2(url: string): Observable<string> {
    return this.http.get<IMessage>(url).pipe(
      retry(3),
      map (msg => msg.title),
      tap(result => console.log(result)),
      catchError(error => {
        console.log(`error: ${error.message}`);
        return of(`[error ${error.status}]`);
      })
    );
  }
}
