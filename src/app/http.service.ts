import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, retry, map, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Message} from './message';
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

  getContent2(url: string): Observable<IMessage> {
    return this.http.get<IMessage>(url).pipe(
      retry(3),
      tap(result => console.log(result)),
      catchError(error => {
        console.log(`error: ${error.message}`);
        const result = new Message(`[error ${error.status}]`);
        return of(result);
      })
    );
  }
}
