import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FilterImagePipe } from './pipes/filter-image.pipe';
import { environment } from '../environments/environment';
import { galleryReducer } from './state/gallery.reducers';
import { GalleryService } from './services/gallery.service';

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
    FormsModule,
    StoreModule.forRoot({gallery: galleryReducer}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
