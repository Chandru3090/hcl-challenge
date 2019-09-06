import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CONFIG } from './app.config';
import { catchError } from 'rxjs/operators';
import { RequestParams, SearchResponse } from './models';
import { throwError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getSearchResults(requestParams: any): Observable<any> {
    let params = new HttpParams({
      fromObject: {
        ...requestParams
      }
    });
    return this.http.get(`${CONFIG.getCities}`, { params }).pipe(
      catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    /* window.alert(errorMessage); */
    return throwError(errorMessage);
  }
}
