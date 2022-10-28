import { ErrorService } from './error.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, retry, throwError } from 'rxjs';
import { IGallery } from '../models/gallery';

@Injectable({
  providedIn: 'root',
})

export class GalleryService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
    ) {
  }

  getAll(): Observable<IGallery[]>{
    return this.http.get<IGallery[]>("https://jsonplaceholder.typicode.com/photos").pipe(
      delay(200),
      retry(2),
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(()=>error.message)
  }

}
