import { createAction, props } from "@ngrx/store";

import { IGallery } from '../models/gallery';

export const getGallery = createAction(
  '[Gallery API] GetGallery',
  props<{allGallery : IGallery[]}>()
  )
