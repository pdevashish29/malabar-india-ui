import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookPostService {

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<any> {
    return  this.httpClient.get(environment.bookPostBaseUrl+'/users').pipe(retry(3),catchError(this.handleError));
  }


  getUser(userId:number){
    return  this.httpClient.get(environment.bookPostBaseUrl+'/users/'+userId).pipe(retry(3),catchError(this.handleError));
  }


  getUserTimeLine(userId:number){
    return  this.httpClient.get(environment.bookPostBaseUrl+'/users-timeline/'+userId).pipe(retry(3),catchError(this.handleError));
  }



  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
