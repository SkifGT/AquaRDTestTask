import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';

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

  title = 'TestZadAquaRD';
  gallery$: Observable<IGallery[]>
  ngOnInit(): void {
  }
}
