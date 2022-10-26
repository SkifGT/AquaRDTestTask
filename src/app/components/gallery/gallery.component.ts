import { Component, Input, OnInit } from '@angular/core';
import { IGallery } from "../../models/gallery";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input()
  gallery: IGallery;

  ngOnInit(): void {
  }

}
