import {configureStore} from '@reduxjs/toolkit';
import GalleryMovie from '../redux/GalleryMovie';

export const store = configureStore({
  reducer: {
    GalleryMovie: GalleryMovie,
  },
});
