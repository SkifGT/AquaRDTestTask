import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FilterImagePipe } from './pipes/filter-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GlobalErrorComponent,
    FilterImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
