import { createReducer, on } from '@ngrx/store';

import { IGallery } from '../models/gallery';
import { getGallery } from './gallery.actions';

const initialState: IGallery[] = [];

const _galleryReducer = createReducer(initialState,
  on(getGallery, (state, {allGallery})=> {
      return [...allGallery];
  })
);
export function galleryReducer(state: any, actions : any){
  return _galleryReducer(state, actions);
}

