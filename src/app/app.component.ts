import { Component } from '@angular/core';
import { IGallery } from './models/gallery';
import {gallery as data} from './data/gallery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestZadAquaRD';

  gallery: IGallery[] = data;
}
