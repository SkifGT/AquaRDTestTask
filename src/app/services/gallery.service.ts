import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGallery } from '../models/gallery';

@Injectable({
  providedIn: 'root',
})

export class GalleryService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IGallery[]>{
    return this.http.get<IGallery[]>("https://jsonplaceholder.typicode.com/photos")
  }
}
