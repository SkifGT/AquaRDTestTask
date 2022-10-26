import { Pipe, PipeTransform } from '@angular/core';
import { IGallery } from '../models/gallery';

@Pipe({
  name: 'filterImage'
})
export class FilterImagePipe implements PipeTransform {

  transform(gallery: IGallery[], search: string): IGallery[] {
    return gallery.filter(i => i.title.toLowerCase().includes(search.toLowerCase()));
  }

}
