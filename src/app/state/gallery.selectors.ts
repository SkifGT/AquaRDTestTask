import { createSelector } from "@ngrx/store";

import { IGallery } from "../models/gallery";
import { AppState } from "./app.state";

export const galleryRootSelector = (state: AppState) => state.gallery;

export const unigueAlbumsId = createSelector(
  galleryRootSelector,
  (gallery : IGallery[]) => {
    return [... new Set(gallery.map(_ => _.albumId))];
  }
)

export const galleryByAlbumId = (id: number) => createSelector(
  galleryRootSelector,
  (gallery : IGallery[]) => {
    if(id === -1){
      return gallery
  }
  return gallery.filter((_) => _.albumId == id)
  }
)
