import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { GalleryService } from 'src/app/services/gallery.service';
import { getGallery } from 'src/app/state/gallery.actions';
import { galleryByAlbumId, unigueAlbumsId } from 'src/app/state/gallery.selectors';
import { IGallery } from "../../models/gallery";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {
  p: number = 1;
  loading = false;
  term = ""
  public albumSelectedId = -1
  public albums_id$ = this.store.pipe(select(unigueAlbumsId))
  public albums$ = this.store.pipe(select(galleryByAlbumId(this.albumSelectedId)))
  constructor(
    private galleryService: GalleryService,
    private store: Store<{gallery : IGallery[]}>
    ) {}

  ngOnInit(): void {
    this.loading = true;
    this.galleryService.getAll()
    .subscribe(
      (data) => {
          this.store.dispatch(getGallery({allGallery : data as IGallery[]}))
          this.loading = false
      }
    );
}

onAlbumChange(id:number){
  this.albums$ = this.store.pipe(select(galleryByAlbumId(id)))
}

}
