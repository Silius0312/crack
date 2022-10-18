import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  films: [
    {id: 1, name: 'Мстители', sets: [], weight: [], repetition: []},
    {id: 2, name: 'Аватар', rating: [1, 2, 3, 4, 5]},
    {id: 3, name: 'Человек-Паук', rating: [1, 2, 3, 4, 5]},
    {id: 4, name: 'Серый человек', rating: [1, 2, 3, 4, 5]},
  ],
};

const GalleryMovie = createSlice({
  name: 'GalleryMovie',
  initialState,
  reducers: {
    addMovie: (state, actions) => {
      state.films.push(actions.payload);
    },
    deleteMovie: (state, action) => {
      state.films = state.films.filter(item => item.id !== action.payload);
    },
    addSets: (state, action) => {
      state.films.sets.push(action.payload);
    },
    addWeight: (state, action) => {
      state.films.weight.push(action.payload);
    },
    addRepetition: (state, action) => {
      state.films.repetition.push(action.payload);
    },
    sortFilms: state => {
      state.films.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
  },
});

export const {
  addMovie,
  deleteMovie,
  addSets,
  addWeight,
  addRepetition,
  sortFilms,
} = GalleryMovie.actions;

export default GalleryMovie.reducer;

// texttInput = Marvel
// // const newMovie = {
//   id: 13,
//   name: TextInput
// }
// dipatch(addMovie(newMovie))
