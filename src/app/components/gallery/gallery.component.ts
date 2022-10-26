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


// import {Component, Input} from '@angular/core'
// import {IProduct} from '../../models/product'

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html'
// })
// export class ProductComponent {
//   @Input() product: IProduct

//   details = false
// }
