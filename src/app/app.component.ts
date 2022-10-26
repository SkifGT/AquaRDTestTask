import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IGallery } from './models/gallery';
import { GalleryService } from './services/gallery.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (private galleryService: GalleryService){
  }

  p: number = 1;
  title = 'TestZadAquaRD';
  gallery$: Observable<IGallery[]>
  loading = false;
  term = ""

  ngOnInit(): void {
    this.loading = true;
    this.gallery$ = this.galleryService.getAll().pipe(tap(() => this.loading = false))
  }

}
