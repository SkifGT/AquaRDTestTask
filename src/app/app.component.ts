import { Component, OnInit } from '@angular/core';
import { IGallery } from './models/gallery';
import { GalleryService } from './services/gallery.service';
// import {gallery as data} from './data/gallery'

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

  gallery: IGallery[] = [];

  loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.galleryService.getAll().subscribe(gall => {
      this.gallery = gall
      this.loading = false;
    })

    // throw new Error('Method not implemented.');
  }

}
